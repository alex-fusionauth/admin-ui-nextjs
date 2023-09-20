import withAuth from "next-auth/middleware"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log('token', req.nextauth.token)
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                // Verifies that the admin role exists on access token data
                const roles: string[] = token?.roles ? token.roles as string[] : [];
                return roles.includes('admin');
            }
        },
    }
)

export const config = { matcher: ["/admin/:path*"] }