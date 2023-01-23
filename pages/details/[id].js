
import {fetchItem} from "@/utils/RealEstatesAPI";
import styles from '@/styles/Details.module.css'
import Head from 'next/head'
// import { Carousel } from 'react-carousel-minimal';

import BootstrapCarousel from "@/components/carousel";

const getTheFirstImage = (item) => {
    if (typeof item.realEstateImageData[0] !== 'undefined') {
        return item.realEstateImageData[0].imageUrl;
    } else {
        return "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80";
    }
}


export async function getServerSideProps(context) {

    const {params} = context;
    const { id } = params;

    const response = await fetchItem(id);

    console.log(response)

    return {
        props: {
            item: response,
        },


        // revalidate: 10, // seconds
    }

}


export default function DetailsPage({item}) {

    return (
        <>

            <Head>
                <title>title {item.subCat} </title>

                <meta name="description" content={item.body} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />


                <meta name="title" content={item.subCat}/>
                <meta name="description" content={item.body}/>


                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`http://skymap.com.s3-website.ap-south-1.amazonaws.com/details/${item.realEstateId}`}/>
                <meta property="og:title" content={item.subCat}/>
                <meta property="og:description" content={item.body}/>
                <meta property="og:image" content={getTheFirstImage(item)}/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={`http://skymap.com.s3-website.ap-south-1.amazonaws.com/details/${item.realEstateId}`}/>

                <meta property="twitter:title" content={item.subCat}/>
                <meta property="twitter:description" content={item.body}/>
                <meta property="twitter:image" content={getTheFirstImage(item)} />
                <meta property="twitter:card" content="summary_large_image" />


                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main>

                <div className={styles.content} >


                    {/*image*/}
                    {/*caption*/}

                    {item.realEstateImageData?.length !== 0
                        && <div className={styles.contentImages}>

                            <BootstrapCarousel  items={item.realEstateImageData.map((item) => {
                                return item.imageUrl;
                            })}/>
                        </div>}



                    {/*{item.realEstateImageData?.length !== 0 &&*/}
                    {/*    (<div className={styles.contentImages} >*/}

                    {/*        <Carousel*/}
                    {/*            data={item.realEstateImageData.map((item, index) => {*/}
                    {/*                return {*/}
                    {/*                    image: item.imageUrl,*/}
                    {/*                    caption: index + 1*/}
                    {/*                }*/}
                    {/*            })}*/}
                    {/*            time={2000}*/}
                    {/*            width="850px"*/}
                    {/*            height="500px"*/}

                    {/*            radius="10px"*/}
                    {/*            slideNumber={true}*/}
                    {/*            captionPosition="bottom"*/}
                    {/*            automatic={true}*/}
                    {/*            dots={true}*/}
                    {/*            pauseIconColor="white"*/}
                    {/*            pauseIconSize="40px"*/}
                    {/*            slideBackgroundColor="darkgrey"*/}
                    {/*            slideImageFit="cover"*/}
                    {/*            thumbnails={true}*/}
                    {/*            thumbnailWidth="100px"*/}
                    {/*            style={{*/}


                    {/*                overflowY: "hidden",*/}
                    {/*                overflowX: "hidden",*/}

                    {/*                // textAlign: "center",*/}
                    {/*                // maxWidth: "850px",*/}
                    {/*                // maxHeight: "500px",*/}
                    {/*                // margin: "40px auto",*/}
                    {/*            }} />*/}


                    {/*    </div>)}*/}


                    <div className={styles.contentContacts}>

                        {item.user && (

                            <>
                                <a href={"tel:" + item.user.phoneNumber}
                                   onClick={(e) => {
                                       e.stopPropagation();
                                   }}>
                                    <button style={{padding: "10px"}}>اتصل</button>
                                </a>


                                <h1>{item.user.username}</h1>
                            </>



                        )}




                    </div>


                    <div className={styles.contentDetails}>

                        <p>{item.body}</p>

                        <p>المرحلة: {item.phase}</p>

                        {item.bedrooms && (<p>غرف النوم: {item.bedrooms}</p>)}


                        {item.bathrooms && (<p>الحمامات: {item.bathrooms}</p>)}

                        {item.landArea && (<p>مساحة الارض: {item.landArea}</p>)}

                        {item.buildingArea && (<p>مساحة المبني: {item.buildingArea}</p>)}

                        {item.requiredPrice && (<p>السعر المطلوب: {item.requiredPrice}</p>)}


                        {item.remainingPrice && (<p>المتبقي: {item.remainingPrice}</p>)}


                    </div>

                </div>
            </main>

        </>

    )


}




