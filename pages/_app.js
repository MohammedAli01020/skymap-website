import '@/styles/globals.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";



export default function App({ Component, pageProps }) {

  return (

      <>
          <Head >

              <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

          </Head>



          <div dir='rtl'>

              <Header />
              <Component {...pageProps} />
              <Footer />
          </div>


      </>

  )



}
