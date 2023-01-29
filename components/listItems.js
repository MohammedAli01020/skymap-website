import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import Image from "next/image";
import Desc from "@/components/desc";
import Link from "next/link";


const getTheFirstImage = (item) => {



    if (typeof item.realEstateImageData[0] !== 'undefined') {
        return item.realEstateImageData[0].imageUrl;
    } else {
        return "/icon.webp";
    }
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
                                srcSet="https://via.placeholder.com/400x300.webp 400w,
                                https://via.placeholder.com/800x600.webp 600w,
                                https://via.placeholder.com/400x300.webp 601w "

                                key={item.realEstateId}
                                src="https://via.placeholder.com/400x300.webp"
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

                                <a href={"tel:" + item.user.phoneNumber}
                                   onClick={(e) => {
                                       e.stopPropagation();
                                   }}>
                                    <button style={{padding: "10px"}}>اتصل</button>
                                </a>

                            </div>






                        </div>



                )

                }
                )}




        </>
    )

}