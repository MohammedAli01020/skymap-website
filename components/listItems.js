import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import Desc from "@/components/desc";
import Link from "next/link";

export const getTheFirstImage = (item) => {

    if (typeof item.realEstateImageData[0] !== 'undefined') {
        return getImageName(item.realEstateImageData[0].imageUrl);

    } else {
        return "/icon.webp";
    }
}

export const sizeExists = (item) => {
    return typeof item.realEstateImageData[0] !== 'undefined';
}

export const getImageName = (imageFile) => {
    const  resizedUrl = "https://skymap-images-resized.s3.ap-south-1.amazonaws.com/";
    const  defaultUrl = "https://skymap-images.s3.ap-south-1.amazonaws.com/";

    const result =  resizedUrl + encodeURIComponent(decodeURIComponent(imageFile).substring(defaultUrl.length).split(".")[0]);
     console.log(result + "-400x300.webp");
     return result;
}

export default function ListItems({ items }) {

    const route = useRouter();

    if (!items.length) {

        return <center>
            <p>فارغ</p>
        </center>
    }

    return(
        <>

            {items.map((item) => {

                return(

                        <div onClick={() => {
                                return route.push(`/details/${item.realEstateId}`);
                            }}

                            key={item.realEstateId} className={styles.itemList} >


                            <img
                                className={styles.itemAvatar}
                                height={300}


                                srcSet={`${getTheFirstImage(item) +"-400x300.webp" } 3x,
                                ${ getTheFirstImage(item) +"-800x600.webp"  } 4x`}

                                // getImageName(getTheFirstImage(item))

                            key={item.realEstateId}
                            src={`${getTheFirstImage(item) + "-400x300.webp"} `}
                            alt={item.body}

                            // sizes="(max-width: 950px) 300w"
                            />
                            


                                {/*<Image className={styles.itemAvatar}*/}
                                {/*    height={250}*/}
                                {/*    width={300}*/}

                                {/*    // objectFit={'cover'}*/}
                                {/*    // quality={50}*/}
                                {/*    priority={false}*/}

                                {/*   key={item.realEstateId}*/}
                                {/*   src={getTheFirstImage(item)}*/}
                                {/*   alt={item.body} />*/}






                            <div className={styles.itemDetails}>

                                <Link href={`/details/${item.realEstateId}`} legacyBehavior>
                                    <a>{item.ojective === 0 ? "بيع": "ايجار"}</a>
                                </Link>

                                <p style={{
                                    fontWeight: "bold"
                                }}>{item.requiredPrice} EG</p>
                                <p>{item.subCat}</p>
                                <p >{item.body}</p>
                                <p>{item.buildingArea} m2</p>


                                <Desc data={{bedrooms: item.bedrooms,
                                    bathrooms: item.bathrooms,
                                    buildingArea: item.buildingArea}}/>


                                <button style={{padding: "10px", width: 100}}>

                                    <a href={"tel:" + item.user.phoneNumber}

                                       onClick={(e) => {
                                           e.stopPropagation();


                                       }}

                                    >اتصل</a>

                                </button>


                            </div>






                        </div>



                )

                }
                )}




        </>
    )

}