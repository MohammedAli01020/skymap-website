import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '@/styles/Header.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return(
        <header className={styles.header} itemProp={"hasPart"} itemScope itemType={"http://schema.org/WPHeader"}>
            <Link href="/" passHref >
                <Image
                    property={false}
                    width={40}
                    height={40}
                    // objectFit={'contain'}
                    className={styles.headerLog}
                    src='/logo192.png'
                    alt='logo192'/>

            </Link>

            <div className={styles.headerItem}  onClick={event => {
                console.log(process.env.NEXT_PUBLIC_TEST)
                console.log(process.env.NEXT_PUBLIC_TEST_PRODUCTION)
                console.log(process.env.NEXT_PUBLIC_AWS)

            }}>
                <LocationOnIcon className={styles.headerItemIcon} />
                <p className={styles.headerItemText}>مجمع البنوك الدور الثاني - مدينتي</p>

            </div>

            <div className={styles.headerItemTwo}>
                <PhoneIcon className={styles.headerItemIcon} />
                <a href={"tel:+201112233266"} className={styles.headerItemText}  >⁦+20 111 223 3266⁩</a>

            </div>

        </header>
    )


}