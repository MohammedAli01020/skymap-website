
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import styles from '@/styles/Desc.module.css'

export default function Desc({data}) {


    const {bedrooms, bathrooms, buildingArea} = data;

    return(
        <div className={styles.content}>
            {bedrooms && (
                <div className={styles.item}>
                    <BedIcon />
                    <p>{bedrooms}</p>
                </div>

            )}

            {bathrooms && (
                <div className={styles.item}>
                    <BathtubIcon />
                    <p>{bathrooms}</p>
                </div>

            )}


            {buildingArea && (
                <div className={styles.item}>
                    <FullscreenIcon />
                    <p>{buildingArea}</p>
                </div>

            )}



        </div>
    )


}


