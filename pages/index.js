import Head from 'next/head'
import {getAll} from "@/utils/RealEstatesAPI";
import ListItems from "@/components/listItems";
import {useState} from "react";
import styles from '../styles/Home.module.css'

import Pagination from "@mui/material/Pagination";

export default function Home({data}) {
    const [currentData, updateData] = useState({
                items: data.content,
                totalElements: data.totalElements,
                pageSize: data.pageable.pageSize,
                totalPages: data.totalPages,
                pageNumber: data.pageable.pageNumber,
                loading: false
    });
    const loadMore = async (page) => {
        updateData({
            ...currentData,
            loading: true
        });

        const data = await getAll(page);
        const response = await data.json();

        updateData({
            ...currentData,
            items: response.content,
            pageNumber: response.pageable.pageNumber,
            loading: false
        })


        window.scroll({top: 0, left: 0, behavior: 'smooth' })

    }


    function addRealEstateAgentJsonLd() {
        return {
            __html: `{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Sky Map",
  "image": "${process.env.NEXT_PUBLIC_BASE_URL}/logo512.png",
  "@id": "RealEstateAgent",
  "url": "${process.env.NEXT_PUBLIC_BASE_URL}/",
  "telephone": "+201141781491",
  "priceRange": "$$$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4J4W+RJW, Second New Cairo, Cairo Governorate 4770810",
    "addressLocality": "Cairo",
    "postalCode": "19511",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.007413,
    "longitude": 31.4913182
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/mohamed.ali.095",
    "https://www.youtube.com/channel/UC9VpCx1nNxZdk2t_wbcel0Q",
    "${process.env.NEXT_PUBLIC_BASE_URL}"
  ] 
}
  `,
        };
    }


    function addOrganizationJsonLd() {
        return {
            __html: `{
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "سكاي ماب",
                  "alternateName": "Sky Map",
                  "url": "${process.env.NEXT_PUBLIC_BASE_URL}/",
                  "logo": "${process.env.NEXT_PUBLIC_BASE_URL}/logo512.png",
                  "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+201141781491",
                  "contactType": "sales",
                  "contactOption": ["TollFree","HearingImpairedSupported"],
                  "areaServed": "EG",
                  "availableLanguage": "Arabic"
                  },
                  "sameAs": [
                  "https://www.facebook.com/mohamed.ali.095",
                  "https://www.youtube.com/channel/UC9VpCx1nNxZdk2t_wbcel0Q",
                  "${process.env.NEXT_PUBLIC_BASE_URL}/"
                  ]
              }
  `,
        };
    }


    function addSiteNameJsonLd() {
        return {
            __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Sky Map",
                        "alternateName" : "سكاي ماب",
                        "url": "${process.env.NEXT_PUBLIC_BASE_URL}/"
                    }
  `,
        };
    }


  return (
    <div >
      <Head>
          <title>سكاي ماب – كل مايخص عقارات مدينتى</title>

          <meta name="google-site-verification" content="Sk0jwE1j981x7cuL4cdFvOxMjRx2TMuj-EwkZlj462I" />

          <meta
              name="description"
              content="سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"
          />


          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />
          <link rel="icon" href={"/favicon.ico"} />


          <meta property="twitter:title" content={"سكاي ماب – كل مايخص عقارات مدينتى"}/>
          <meta property="twitter:description" content={"سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"}/>
          <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />
          <meta property="twitter:card" content="summary_large_image" />


          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/`}/>
          <meta property="og:title" content={"سكاي ماب – كل مايخص عقارات مدينتى"}/>
          <meta property="og:description" content={"سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"}/>
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />





          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={addOrganizationJsonLd()}
              key="organization-jsonld"
          />

          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={addRealEstateAgentJsonLd()}
              key="realEstateAgent-jsonld"
          />

          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={addSiteNameJsonLd()}
              key="siteName-jsonld"
          />
      </Head>

      <main className={styles.main}>
          <div className={styles.list}>
              <ListItems  items={currentData.items}/>

              <Pagination
                  className={styles.pagination}
                  variant="outlined" shape="rounded"

                  count={currentData.totalPages - 1}

                  page={currentData.pageNumber}


                  onChange={(e, value)=>{

                         console.log(value);
                         if (value === currentData.pageNumber) return;
                         loadMore(value).then(r => {});

              }} />

          </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {

    try {
        const response = await getAll(0);

        if (response.ok && response) {

            const data = await response.json()
            return {
                props: {
                    data
                },
                revalidate: 10  // seconds
            }
        } else {
            return { notFound: true };
        }

    } catch (e) {
        return { notFound: true };
    }


}





