
import Image from "next/image";

import { Carousel } from 'react-responsive-carousel';


export default function BootstrapCarousel({items}) {

    return (
        <Carousel showArrows={true}
                  useKeyboardArrows={true}>
            {items.map((item, i) => (
                <div key={i}  className="slide" >
                    <Image
                        height={400}
                        width={100}
                        quality={30}
                        objectFit="contain"
                        key={i}
                        src={item}
                        alt="slides" />
                </div>
            ))}
        </Carousel>
    );
}