import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import Image from "next/image";


const getTheFirstImage = (item) => {
    if (typeof item.realEstateImageData[0] !== 'undefined') {
        return item.realEstateImageData[0].imageUrl;
    } else {
        return "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80";
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
                    <div
                        onClick={() => {
                            return route.push(`/details/${item.realEstateId}` , undefined, { scroll: false } );
                        }}

                        key={item.realEstateId} className={styles.itemList} >

                        <Image className={styles.itemAvatar}
                                       height={300}
                                       width={300}
                                       quality={40}
                                       key={item.realEstateId}
                                       src={getTheFirstImage(item)}
                                       alt={item.body} />


                        <div className={styles.itemDetails}>
                            <p>{item.ojective === 0 ? "بيع": "ايجار"}</p>

                            <p>{item.requiredPrice} EG</p>
                            <p>{item.subCat}</p>
                            <p >{item.body}</p>
                            <p>{item.buildingArea} m2</p>

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