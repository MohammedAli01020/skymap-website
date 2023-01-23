import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '@/styles/Header.module.css'

export default function Header() {

    return(<>

        <div className={styles.header}>


            <img className={styles.headerLog}
                 src='/logo192.png'/>

            <div className={styles.headerItem}  >
                <LocationOnIcon className={styles.headerItemIcon} />
                <p className={styles.headerItemText}>مجمع البنوك الدور الثاني - مدينتي</p>

            </div>

            <div className={styles.headerItemTwo}>
                <PhoneIcon className={styles.headerItemIcon} />
                <a href={""} className={styles.headerItemText}  >⁦+20 111 223 3266⁩</a>

            </div>

        </div>

    </>)


}