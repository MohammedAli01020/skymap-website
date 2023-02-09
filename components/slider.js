import React, {useState} from "react";
import styles from '@/styles/Slider.module.css'
// import Image from "next/image";

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {getImageName, sizeExists} from "@/components/listItems";


export default function Slider({items}) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== items.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === items.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(items.length)
        }
    }


    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={styles.containerSlider}>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={slideIndex === index + 1 ? `${styles.slide} ${styles.activeAnim}` : `${styles.slide}`}>

                        <img
                            style={{width: "100%", objectFit: "contain"}}

                            height={400}
                            srcSet={`${getImageName(item) +"-400x300.webp" } 400w,
                            
                            ${getImageName(item) +"-800x600.webp" } 600w
                            `}

                            key={item.realEstateId}
                            src={`${getImageName(item) + "-800x600.webp"}`}
                            alt={item.body}

                            // sizes="(max-width: 950px) 300w"
                        />


                        {/*<Image*/}

                        {/*    alt={"cover"}*/}
                        {/*    src={item}*/}
                        {/*    priority={index === 0}*/}

                        {/*    // quality={50}*/}
                        {/*    fill*/}
                        {/*    sizes="(max-width: 600px) 60vw, (min-width: 600px) 100vm"*/}

                        {/*/>*/}

                    </div>
                )
            })}

            {items.length !== 1 && (

                <>
                    <ArrowCircleRightIcon
                        className={`${styles.btnSlide} ${styles.next}`}
                        onClick={() => {
                            prevSlide()
                        }}/>

                    <ArrowCircleLeftIcon
                        className={`${styles.btnSlide} ${styles.prev}`}
                        onClick={() => {
                            nextSlide()
                        }}/>

                </>
            )}


            <div className={styles.containerDots}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
                    />
                ))}
            </div>
        </div>
    )
}
