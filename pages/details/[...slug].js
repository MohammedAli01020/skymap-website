
import {fetchItem} from "@/utils/RealEstatesAPI";
import styles from '@/styles/Details.module.css'
import Head from 'next/head'

import Slider from "@/components/slider";
import Desc from "@/components/desc";
import {convertToSlug, getImageName, sizeExists} from "@/components/listItems";

export async function getServerSideProps(context) {

    const {params} = context;
    const { slug } = params;

    const id = slug[0]
    // const title = slug[1]

    const response = await fetchItem(id);

    return {
        props: {
            item: response,
        },
        // revalidate: 10, // seconds
    }

}

export const subCatNames = new Map([

    //residential
    ["apartment","شقة"],
    ["villa", "فيلا منفصلة"],
    ["townHouse", "تاون هاوس"],
    ["twinHouse", "توين هاوس"],

    ["duplex", "دوبلكس"],

    ["penthouse", "بنتهاوس"],

    ["villaInCompound","فيلا تجارية"],


    ["residentialBuilding","مبني سكني"],

    ["otherResidentialProperties","اخري"],
    ["studio","ستوديو"],

    // Commercial
    ["office","مكتب"],
    ["market","محل تجاري"],
    ["store","مخزن"],
    ["workersHousing","سكن عمال"],
    ["commercialVilla","فيلا تجارية"],
    ["commercialBuilding","مبني تجاري"],
    ["otherCommercialProperties","اخري"],


    ["garage","جراج"],

    ["restaurantAndCafe","مطعم وكافية"],

    ["clinic","عيادة"],
    ["factory","مصنع"],

    // lands

    ["agriculturalLand","زراعية"],
    ["commercialLand","تجارية"],

    ["industrialLand","صناعية"],
    ["residentialLand","سكنية"],

    ["multipleUseLand","استخدام متعدد"],

    ["otherLands","اخري"],


]);

export const buildTitle = (item) => {
    if (item.phase) {
        const obj = item.objective === 0 ? "للبيع": "للايجار";
        return `${subCatNames.get(item.subCat)} ${obj} بالمرحلة ${item.phase}` ;
    } else {
        const obj = item.objective === 0 ? "للبيع": "للايجار";
        return `${subCatNames.get(item.subCat)} ${obj}` ;
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



    function addProductJsonLd() {
        return {
            __html: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "sku": "${item.realEstateId}",
  "image": "${sizeExists(item) ? getImageName(item.realEstateImageData[0].imageUrl) + "-800x600.webp" : "/icon.webp"}",
  "name": "${buildTitle(item)}",
  "description": "${item.body}",


  "offers": {
    "@type": "Offer",
    "url": "https://main.d2hqtqv4zfjkly.amplifyapp.com/details/${item.realEstateId}/${convertToSlug(buildTitle(item))}",
    "itemCondition": "https://schema.org/UsedCondition",
    "availability": "${!item.deleted && item.postponeDateTime == null  ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"}" ,
    "price": "${item.requiredPrice}",
    "priceCurrency": "EGP",
    "seller": {
    
       "name": "Sky Map",
       "type": "Thing"
    },
   "businessFunction": "${item.objective === 0 ? "http://purl.org/goodrelations/v1#Sell" : "http://purl.org/goodrelations/v1#LeaseOut"}"
  }
}

  `,
        };
    }

    return (
        <>
            <Head>
                <title>{buildTitle(item)} </title>

                <meta name="description" content={item.body} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="title" content={buildTitle(item)}/>
                <meta name="description" content={item.body}/>


                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`https://main.d2hqtqv4zfjkly.amplifyapp.com/details/${item.realEstateId}/${convertToSlug(buildTitle(item))}`}/>
                <meta property="og:title" content={buildTitle(item)}/>
                <meta property="og:description" content={item.body}/>
                <meta property="og:image" content={getTheMetaImage(item)} />


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={`https://main.d2hqtqv4zfjkly.amplifyapp.com/details/${item.realEstateId}/${convertToSlug(buildTitle(item))}`}/>

                <meta property="twitter:title" content={buildTitle(item)}/>
                <meta property="twitter:description" content={item.body}/>
                <meta property="twitter:image" content={getTheMetaImage(item)} />
                <meta property="twitter:card" content="summary_large_image" />


                <link rel="icon" href={"/favicon.ico"} />


                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addProductJsonLd()}
                    key="product-jsonld"
                />
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


                        {item.phase &&  (<p>المرحلة: {item.phase}</p>)}


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




