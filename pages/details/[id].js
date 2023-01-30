
import {fetchItem} from "@/utils/RealEstatesAPI";
import styles from '@/styles/Details.module.css'
import Head from 'next/head'

import Slider from "@/components/slider";
import Desc from "@/components/desc";
import {getImageName} from "@/components/listItems";

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


const buildTitle = (item) => {
    if (item.phase) {
        const obj = item.objective === 0 ? "للبيع": "للايجار";
        return `${item.subCat} ${obj} بالمرحلة ${item.phase}` ;
    } else {
        const obj = item.objective === 0 ? "للبيع": "للايجار";
        return `${item.subCat} ${obj}` ;
    }
}

export const getTheMetaImage = (item) => {

    // const origin =
    //     typeof window !== 'undefined' && window.location.origin
    //         ? window.location.origin
    //         : '';
    // console.log(URL);

    if (typeof item.realEstateImageData[0] !== 'undefined') {
        return getImageName(item.realEstateImageData[0].imageUrl) + "-400x300.jpeg";

    } else {
        return "https://main.d2hqtqv4zfjkly.amplifyapp.com/meta-logo.jpeg";
    }
}



export default function DetailsPage({item}) {




    return (
        <>

            <Head>
                <title>title {item.subCat} </title>

                <meta name="description" content={item.body} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />


                <meta name="title" content={buildTitle(item)}/>
                <meta name="description" content={item.body}/>


                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`http://skymap.com.s3-website.ap-south-1.amazonaws.com/details/${item.realEstateId}`}/>
                <meta property="og:title" content={buildTitle(item)}/>
                <meta property="og:description" content={item.body}/>
                <meta property="og:image" content={getTheMetaImage(item)} />


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={`http://skymap.com.s3-website.ap-south-1.amazonaws.com/details/${item.realEstateId}`}/>

                <meta property="twitter:title" content={buildTitle(item)}/>
                <meta property="twitter:description" content={item.body}/>
                <meta property="twitter:image" content={getTheMetaImage(item)} />
                <meta property="twitter:card" content="summary_large_image" />


                <link rel="icon" href={"/favicon.ico"} />
            </Head>


            <main>

                <div className={styles.content} >

                    {item.realEstateImageData?.length !== 0
                        &&
                        <div className={styles.contentImages}>
                            <Slider  items={item.realEstateImageData.map((item) => {
                                return item.imageUrl;
                            })}/>

                        </div>
                            }


                    <div className={styles.contentContacts}>

                        {item.user && (

                            <>

                                <div className={styles.contactItem}>

                                    <button style={{padding: "10px"}}>

                                        <a href={"tel:" + item.user.phoneNumber}>اتصل</a>

                                    </button>



                                    <strong>{item.user.username}</strong>
                                </div>

                                <div className={styles.contactItem}>

                                    <p>السعر المطلوب: <strong>{item.requiredPrice}</strong></p>

                                    {item.remainingPrice && (
                                        <p>المتبقي:<strong>{item.remainingPrice}</strong></p>
                                    )
                                    }
                                </div>


                            </>



                        )}




                    </div>


                    <div className={styles.contentDetails}>



                        <h1 style={{fontSize: 25}}>{buildTitle(item)}</h1>


                        <h3 >التفاصيل</h3>
                        <Desc data={{bedrooms: item.bedrooms,
                            bathrooms: item.bathrooms,
                            buildingArea: item.buildingArea}}/>


                        <p>المرحلة: {item.phase}</p>

                        {item.bedrooms && (<p>غرف النوم: {item.bedrooms}</p>)}


                        {item.bathrooms && (<p>الحمامات: {item.bathrooms}</p>)}

                        {item.landArea && (<p>مساحة الارض: {item.landArea}</p>)}

                        {item.buildingArea && (<p>مساحة المبني: {item.buildingArea}</p>)}

                        {item.requiredPrice && (<p>السعر المطلوب: {item.requiredPrice}</p>)}


                        {item.remainingPrice && (<p>المتبقي: {item.remainingPrice}</p>)}




                        {
                            item.body && (
                                <>
                                    <hr />
                                    <h3 >الوصف</h3>
                                    <p>{item.body}</p>
                                </>
                            )


                        }

                    </div>

                </div>
            </main>

        </>

    )


}




