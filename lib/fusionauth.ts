import FusionAuthClient from '@fusionauth/typescript-client';

export const fusionAuthIssuer = process.env.FUSIONAUTH_ISSUER as string;
export const fusionAuthClientId = process.env.FUSIONAUTH_CLIENT_ID as string;
export const fusionAuthClientSecret = process.env.FUSIONAUTH_CLIENT_SECRET as string;
export const fusionAuthUrl = process.env.FUSIONAUTH_URL as string;
export const fusionAuthTenantId = process.env.FUSIONAUTH_TENANT_ID as string;

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

// Only this file
const fusionAuthApiKey = process.env.FUSIONAUTH_API_KEY;
if (!fusionAuthApiKey) {
    throw Error('FUSIONAUTH_API_KEY' + missingError)
}

export const client = new FusionAuthClient(fusionAuthApiKey, fusionAuthUrl, fusionAuthTenantId);