import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [

        CredentialsProvider({

            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "mohamed1235" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const {username, password} = credentials;
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        username,
                        password
                    }),
                    headers: { "Content-Type": "application/json" }
                })

                const user = await res.json()

                if (res.ok && user) {
                    return user;
                } else {
                    return null
                }

            }
        })
    ],
    session: {
        jwt: true
        // strategy: "jwt"
    },

    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },


    callbacks: {

        async jwt({token, user}) {

            // Persist the OAuth access_token to the token right after signin
            if (user) {
                token.user = user
            }
            return token
        },
        async session({session, token}) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token.user
            return session
        }
    }
}

export default NextAuth(authOptions)