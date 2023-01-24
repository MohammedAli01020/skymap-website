
import Image from "next/image";
import {useState} from "react";
import styles from '@/styles/Slider.module.css'

export default function Slider({items}) {


    const [currentIndex, setIndex] = useState(0);


    const prev = () => {

        const isFirst = currentIndex === 0
        const newIndex = isFirst ? items.length - 1 : currentIndex - 1;
        setIndex(newIndex)
    }

    const next = () => {

        const isLast = currentIndex === items.length - 1
        const newIndex = isLast ? 0 : currentIndex + 1;
        setIndex(newIndex)
    }


    return (

        <>
            <div className={styles.container}>



                <img className={styles.fade} style={{
                    width: "100%",
                    objectFit: "cover"
                }}
                height={350}
                    src={`${items[currentIndex]}`}
                    alt={"image"}
                />



                <a className={styles.next}  onClick={() => {
                    next()
                }}>❯</a>
                <a className={styles.prev} onClick={() => {
                    prev()
                }}>❮</a>



            </div>

        </>



    );
}