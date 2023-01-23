import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return (

      <>
          <Head />


          <div dir='rtl'>

              <Component {...pageProps} />
          </div>


      </>

  )



}
