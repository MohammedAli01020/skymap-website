
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {


    function addSiteNameJsonLd() {
        return {
            __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Sky Map",
                        "alternateName" : "سكاي ماب",
                        "url": "https://main.d2hqtqv4zfjkly.amplifyapp.com//"
                    }
  `,
        };
    }




        return (
        <Html lang="en" itemscope itemType="http://schema.org/WebPage">
            <Head >
                <meta name="google-site-verification" content="Sk0jwE1j981x7cuL4cdFvOxMjRx2TMuj-EwkZlj462I" />
                <title>سكاي ماب – كل مايخص عقارات مدينتى</title>

                <meta
                    name="description"
                    content="سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"
                />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" href={"https://main.d2hqtqv4zfjkly.amplifyapp.com/meta-logo.jpeg"} />
                <link rel="icon" href={"/favicon.ico"} />


                <meta property="twitter:title" content={"سكاي ماب – كل مايخص عقارات مدينتى"}/>
                <meta property="twitter:description" content={"سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"}/>
                <meta property="twitter:image" content={"https://main.d2hqtqv4zfjkly.amplifyapp.com/meta-logo.jpeg"} />
                <meta property="twitter:card" content="summary_large_image" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={"https://main.d2hqtqv4zfjkly.amplifyapp.com/"}/>
                <meta property="og:title" content={"سكاي ماب – كل مايخص عقارات مدينتى"}/>
                <meta property="og:description" content={"سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"}/>
                <meta property="og:image" content={"https://main.d2hqtqv4zfjkly.amplifyapp.com/meta-logo.jpeg"} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addSiteNameJsonLd()}
                    key="siteName-jsonld"
                />

            </Head>
            <body>
            <Main />
            <NextScript/>
            </body>
        </Html>
    )
}
