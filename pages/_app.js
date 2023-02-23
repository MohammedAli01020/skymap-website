import '@/styles/globals.css'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react"

import { wrapper } from '@/store/store.js'

import { Provider } from 'react-redux'



export default function App({Component, pageProps: { session, ...pageProps}}) {

    const {store, props} = wrapper.useWrappedStore(pageProps);

    if (Component.getLayout) {
        return (
            <Provider store={store} >
                <SessionProvider session={session}>
                    Component.getLayout(
                    <Component {...pageProps} />
                    )
                </SessionProvider>
            </Provider>

        )
    }
    return (
        <Provider store={store} >
            <SessionProvider session={session}>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </SessionProvider>
        </Provider>

    )


}

//
// const App = ({Component, pageProps: { session, ...pageProps}}) => {
//     if (Component.getLayout) {
//         return (
//             <SessionProvider session={session}>
//                 Component.getLayout(
//                 <Component {...pageProps} />
//                 )
//             </SessionProvider>
//         )
//     }
//     return (
//         <SessionProvider session={session}>
//             <Header/>
//             <Component {...pageProps} />
//             <Footer/>
//         </SessionProvider>
//     )
//
// }
//
// export default wrapper.withRedux(App)