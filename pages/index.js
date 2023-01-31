import Head from 'next/head'
import {getAll} from "@/utils/RealEstatesAPI";
import ListItems from "@/components/listItems";
import {useState} from "react";
import styles from '../styles/Home.module.css'

import Pagination from "@mui/material/Pagination";
import {buildTitle, getTheMetaImage} from "@/pages/details/[id]";



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
        const response = await getAll(page);

        updateData({
            ...currentData,
            items: response.content,
            pageNumber: response.pageable.pageNumber,
            loading: false
        })



        window.scroll({top: 0, left: 0, behavior: 'smooth' })

    }



  return (
    <div >
      <Head>
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

      </Head>

      <main className={styles.main}>



          {/*<div>*/}

          {/*    <Link href={"/test" } legacyBehavior><a>go to Test</a></Link>*/}
          {/*</div>*/}



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

    const response = await getAll(0);

    return {
        props: {
            data: response
        },
        revalidate: 10, // seconds
    }



}





