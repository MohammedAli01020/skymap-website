import '@/styles/globals.css'

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function App({Component, pageProps}) {

    if (Component.getLayout) {
        return (
            <div dir='rtl'>
                Component.getLayout(
                  <Component {...pageProps} />
                );
            </div>
        )
    }
    return (

        <>
            <div dir='rtl'>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </>

    )


}
