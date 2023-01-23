import Head from 'next/head'
import {getAll} from "@/utils/RealEstatesAPI";
import ListItems from "@/components/listItems";
import ReactPaginate from "react-paginate";
import customStyle from "styled-components";

import {useState} from "react";
import styles from '../styles/Home.module.css'

// You can style your pagination component
// thanks to styled-components.
// Use inner class names to style the controls.
const MyPaginate = customStyle(ReactPaginate).attrs({
    // You can redefine classes here, if you want.
    activeClassName: 'active', // default to "selected"
})`
  
  @media screen and (min-width: 950px) {
    width: 70%;
  }
  
  margin-bottom: 2rem;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;


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

    }






  return (
    <>
      <Head>
          <title>عقارات مدينتي skyMap</title>
          <meta
              name="description"
              content="عقارات مدينتي للبيع وللايجار شقق للبيع وللايجار فيلات للبيع وللايجار محلات ومكاتب ادراية مدينتي madinaty city طلعت مصطفي"
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="icon" href="/favicon.ico" />

      </Head>
      <main >


          {/*header*/}
          {/*  body*/}

          <div className={styles.body}>

              <div className={styles.list}>
                  <ListItems  items={currentData.items}/>

                  <MyPaginate
                      pageCount={currentData.totalPages}
                      onPageChange={(index) => {
                          console.log(index.selected);
                          if (index.selected === currentData.pageNumber) return;
                          loadMore(index.selected).then(r => {});
                      }}
                      forcePage={currentData.pageNumber}
                  />


              </div>








          </div>


          {/*  footer*/}

      </main>
    </>
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