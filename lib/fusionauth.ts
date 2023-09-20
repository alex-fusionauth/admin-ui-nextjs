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

export const fetchFusionAuth = async ({ path, method, }: { path: string, method: httpMethods }) => {
    const res = await fetch(`${fusionAuthUrl}${path}`, {
        method,
        headers: {
            'Authorization': fusionAuthApiKey,
            'X-FusionAuth-TenantId': fusionAuthTenantId,
            'Content-Type': 'application/json',
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch data, return status ${res.status}`);
    }
    return res.json();
}

export enum httpMethods {
    ACL = 'ACL',
    CONNECT = 'CONNECT',
    GET = 'GET',
    LOCK = 'LOCK',
    MKACTIVITY = 'MKACTIVITY',
    MOVE = 'MOVE',
    PATCH = 'PATCH',
    PROPPATCH = 'PROPPATCH',
    REBIND = 'REBIND',
    SOURCE = 'SOURCE',
    UNBIND = 'UNBIND',
    UNSUBSCRIBE = 'UNSUBSCRIBE',
    BIND = 'BIND',
    COPY = 'COPY',
    HEAD = 'HEAD',
    'M-SEARCH' = 'M-SEARCH',
    MKCALENDAR = 'MKCALENDAR',
    NOTIFY = 'NOTIFY',
    POST = 'POST',
    PURGE = 'PURGE',
    REPORT = 'REPORT',
    SUBSCRIBE = 'SUBSCRIBE',
    UNLINK = 'UNLINK',
    CHECKOUT = 'CHECKOUT',
    DELETE = 'DELETE',
    LINK = 'LINK',
    MERGE = 'MERGE',
    MKCOL = 'MKCOL',
    OPTIONS = 'OPTIONS',
    PROPFIND = 'PROPFIND',
    PUT = 'PUT',
    SEARCH = 'SEARCH',
    TRACE = 'TRACE',
    UNLOCK = 'UNLOCK',
}