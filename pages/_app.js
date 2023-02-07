import '@/styles/globals.css'

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function App({Component, pageProps}) {

    if (Component.getLayout) {
        return (
            Component.getLayout(
              <Component {...pageProps} />
            )
        )
    }
    return (

        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>

    )


}
