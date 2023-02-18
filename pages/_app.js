import '@/styles/globals.css'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react"

export default function App({Component, pageProps: { session, ...pageProps}}) {

    if (Component.getLayout) {
        return (
            <SessionProvider session={session}>
                Component.getLayout(
                  <Component {...pageProps} />
                )
            </SessionProvider>
        )
    }
    return (

        <>
            <SessionProvider session={session}>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </SessionProvider>
        </>

    )


}
