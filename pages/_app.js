import '@/styles/globals.css'

import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";


export default function App({ Component, pageProps }) {


    if (Component.getLayout) {

        return Component.getLayout(

            <>
                <Head >
                    <meta name="google-site-verification" content="Sk0jwE1j981x7cuL4cdFvOxMjRx2TMuj-EwkZlj462I" />
                </Head>

                <div dir='rtl'>
                    <Component {...pageProps} />
                </div>


            </>

        );
    }
  return (

      <>
          <Head >
              <meta name="google-site-verification" content="Sk0jwE1j981x7cuL4cdFvOxMjRx2TMuj-EwkZlj462I" />
          </Head>


          <div dir='rtl'>

              <Header />
              <Component {...pageProps} />
              <Footer />
          </div>


      </>

  )



}
