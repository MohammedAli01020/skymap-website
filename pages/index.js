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
          <title>عقارات مدينتي skyMap</title>
          <meta
              name="description"
              content="عقارات مدينتي للبيع وللايجار شقق للبيع وللايجار فيلات للبيع وللايجار محلات ومكاتب ادراية مدينتي madinaty city طلعت مصطفي"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href={"/logo192.png"} />
          <link rel="icon" href={"/favicon.ico"} />

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





