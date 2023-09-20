import NextAuth, { Account, AuthOptions } from "next-auth"
import FusionAuthProvider from "next-auth/providers/fusionauth"
import { GetPublicKeyOrSecret, JwtPayload, verify } from 'jsonwebtoken';
import jwksClient, { RsaSigningKey } from 'jwks-rsa';

const fusionAuthIssuer = process.env.FUSIONAUTH_ISSUER;
const fusionAuthClientId = process.env.FUSIONAUTH_CLIENT_ID;
const fusionAuthClientSecret = process.env.FUSIONAUTH_CLIENT_SECRET;
const fusionAuthUrl = process.env.FUSIONAUTH_URL;
const fusionAuthTenantId = process.env.FUSIONAUTH_TENANT_ID;

const missingError = ' missing in environment variables.';
if (!fusionAuthIssuer) {
    throw Error('FUSIONAUTH_ISSUER' + missingError)
}
if (!fusionAuthClientId) {
    throw Error('FUSIONAUTH_CLIENT_ID' + missingError)
}
if (!fusionAuthClientSecret) {
    throw Error('FUSIONAUTH_CLIENT_SECRET' + missingError)
}
if (!fusionAuthUrl) {
    throw Error('FUSIONAUTH_URL' + missingError)
}
if (!fusionAuthTenantId) {
    throw Error('FUSIONAUTH_TENANT_ID' + missingError)
}

export const authOptions: AuthOptions =
{
    providers: [
        FusionAuthProvider({
            issuer: fusionAuthIssuer,
            clientId: fusionAuthClientId,
            clientSecret: fusionAuthClientSecret,
            wellKnown: `${fusionAuthUrl}/.well-known/openid-configuration/${fusionAuthTenantId}`,
            tenantId: fusionAuthTenantId, // Only required if you're using multi-tenancy
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                const decodedFromJwt = await validateUser(account)
                token = { ...token, ...decodedFromJwt }
            }
            return token
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// Validate the token signature, make sure it wasn't expired
const validateUser = async (account: Account) => {
    // Make sure the user is authenticated.
    if (!account || !account?.access_token) {
        return {};
    }
    try {
        let decodedFromJwt: JwtPayload = {};
        await verify(account.access_token, await getKey, undefined, (err, decoded) => {
            decodedFromJwt = decoded as JwtPayload;
        });
        return decodedFromJwt;
    } catch (err) {
        console.error(err);
        return {};
    }
}


const getKey: GetPublicKeyOrSecret = async (header, callback) => {
    const jwks = jwksClient({
        jwksUri: `${fusionAuthUrl}/.well-known/jwks.json`
    });
    const key = await jwks.getSigningKey(header.kid) as RsaSigningKey;
    var signingKey = key?.getPublicKey() || key?.rsaPublicKey;
    callback(null, signingKey);
}