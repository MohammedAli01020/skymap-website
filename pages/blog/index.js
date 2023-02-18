import Head from "next/head";
import styles from "@/styles/Posts.module.css"
import {getAllPosts} from "@/utils/RealEstatesAPI";
import {useState} from "react";

import Pagination from "@mui/material/Pagination";
import PostsList from "@/components/postsList";
import Link from "next/link";
import {useSession} from "next-auth/react";


export default function Posts({data}) {


    const { data: session, status: loading} = useSession();

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

        const data = await getAllPosts(page);
        const response = await data.json();

        updateData({
            ...currentData,
            items: response.content,
            pageNumber: response.pageable.pageNumber,
            loading: false
        })



        window.scroll({top: 0, left: 0, behavior: 'smooth' })

    }

    return(
        <>
            <Head>
                <title>مدونة سكاي ماب | sky map blog</title>

                <meta
                    name="description"
                    content="مدونه سكاي ماب - sky map تحتوي علي كل ما يخص اخبار العقارات بمدينتي وايضا الاخبار العامة"
                />


                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />
                <link rel="icon" href={"/favicon.ico"} />


                <meta property="twitter:title" content={"مدونة سكاي ماب | sky map blog"}/>
                <meta property="twitter:description" content={"مدونه سكاي ماب - sky map تحتوي علي كل ما يخص اخبار العقارات بمدينتي وايضا الاخبار العامة"}/>
                <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />
                <meta property="twitter:card" content="summary_large_image" />


                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/`}/>
                <meta property="og:title" content={"مدونة سكاي ماب | sky map blog"}/>
                <meta property="og:description" content={"مدونه سكاي ماب - sky map تحتوي علي كل ما يخص اخبار العقارات بمدينتي وايضا الاخبار العامة"}/>
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />

            </Head>
            <main className={styles.defaultMargin}>
                <section >

                    <div style={{display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "flex-start", alignItems: "center"}}>
                        <h1>كل اخبار المدونه</h1>

                        {loading !== "loading" && session && (
                            <Link href={"/blog/create"} legacyBehavior>
                                <button style={{padding: 10}}>
                                    اضف
                                </button>
                            </Link>
                        )}
                    </div>



                    <PostsList  allPostsData={currentData.items}/>

                    <Pagination
                        variant="outlined" shape="rounded"

                        count={currentData.totalPages - 1}

                        page={currentData.pageNumber}

                        onChange={(e, value)=>{

                            console.log(value);
                            if (value === currentData.pageNumber) return;
                            loadMore(value).then(r => {});

                        }} />

                </section>
            </main>
        </>

    )

}



export async function getServerSideProps(context) {


    try {
        const response = await getAllPosts(0);
        if (response.ok && response) {
            const data = await response.json();
            return {
                props: {
                    data
                },
            }

        } else {
            return { notFound: true };
        }

    } catch (e) {
        return { notFound: true };
    }




}
