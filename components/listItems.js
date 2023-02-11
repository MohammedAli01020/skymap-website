import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import Desc from "@/components/desc";
import Link from "next/link";
import {buildTitle} from "@/pages/details/[...slug]";


export const convertToSlug = (text) => {
    return  text
        .toLowerCase()
        // .replace(/[^\w ]+/g, '')
        .replace(/\s+/g, '-')
        .replace(/ +/g, '-')
        .replace(/[^a-zA-Zء-ي0-9/]+/g, '');

    // return encodeURIComponent(val)
}

export const sizeExists = (item) => {
    return typeof item && item.realEstateImageData && typeof item.realEstateImageData[0] !== 'undefined';
}

export const getImageName = (imageFile) => {
    const  resizedUrl = "https://skymap-images-resized.s3.ap-south-1.amazonaws.com/";
    const  defaultUrl = "https://skymap-images.s3.ap-south-1.amazonaws.com/";

    const result =  resizedUrl + encodeURIComponent(decodeURIComponent(imageFile).substring(defaultUrl.length).split(".")[0]);
     console.log(result + "-400x300.webp");
     return result;
}


const onImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300.webp";
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

                    <Link href={`/details/${item.realEstateId}/${convertToSlug(buildTitle(item))}.html`} legacyBehavior passHref
                    key={item.realEstateId}>


                        <div
                            className={styles.itemList} >

                            <img
                                className={styles.itemAvatar}
                                height={300}

                                srcSet={`${sizeExists(item) ? getImageName(item.realEstateImageData[0].imageUrl) +"-400x300.webp" : "/icon.webp"} 3x,
                                ${sizeExists(item) ? getImageName(item.realEstateImageData[0].imageUrl) +"-800x600.webp" : "/icon.webp"} 4x`}

                                onError={onImageError}
                                key={item.realEstateId}
                                src={`${sizeExists(item) ? getImageName(item.realEstateImageData[0].imageUrl) + "-400x300.webp" : "/icon.webp"} `}
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

                                <h1 style={{fontSize: "1.1em"}}>{buildTitle(item)}</h1>

                                <p style={{
                                    fontWeight: "bold"
                                }}>{item.requiredPrice} EG</p>
                                <p>{item.subCat}</p>
                                <p >{item.body}</p>
                                <p>{item.buildingArea} m2</p>


                                <Desc data={{bedrooms: item.bedrooms,
                                    bathrooms: item.bathrooms,
                                    buildingArea: item.buildingArea}}/>


                                <button style={{padding: "10px",
                                    marginBottom: 10,width: 100}}>

                                    <a href={"tel:" + item.user.phoneNumber}

                                       style={{textDecoration: "none"}}
                                       onClick={(e) => {
                                           e.stopPropagation();
                                       }}

                                    >اتصل</a>

                                </button>


                            </div>






                        </div>



                    </Link>




                )

                }
                )}




        </>
    )

}