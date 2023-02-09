
import styles from '@/styles/Footer.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

export default function Footer() {

    return (

        <footer className={styles.footer} itemProp={"hasPart"} itemScope itemType={"http://schema.org/WPFooter"} >

                <div >
                    <h3>Sky<span>Map</span></h3>
                    <p>حمل تطبيق الاندرويد الآن</p>
                    <Link href={"https://play.google.com/store/apps/details?id=com.skymap.realestate"}
                          legacyBehavior passHref >
                        <img src="https://img.icons8.com/color/48/null/google-play.png" style={{
                            cursor: "pointer"
                        }}/>
                    </Link>


                    <ul

                        itemScope itemType={"http://www.schema.org/SiteNavigationElement"}
                        className={styles.footerMenu} >
                        <li itemProp={"name"} >
                            <Link href="/" itemprop={"url"}> الرئيسية </Link>
                        </li>

                        <li itemProp={"name"}>
                            <Link href={"/about"} itemprop={"url"}> عن الشركة </Link>
                        </li>


                        <li itemProp={"name"}>
                            <Link href={"/contact"} itemprop={"url"}> تواصل معنا </Link>
                        </li>

                        <li itemProp={"name"}>
                            <Link href={"/blog"} itemprop={"url"}> المدونه </Link>
                        </li>

                    </ul>

                    <p >Copyright © 2023 <strong>سكاي ماب</strong> جميع الحقوق محفوظة لدي شركة</p>
                </div>

                <div >
                    <div>
                        <p><span>القاهرة </span>
                        مدينتي - مجمع البنوك الدور الثاني</p>
                    </div>

                    <div>
                         <Link href={"tel:+201112233266"}  >⁦+20 111 223 3266⁩</Link>

                    </div>
                    <div>
                        <Link href="mailto:mohamedalivip6@gmail.com">xyz@gmail.com</Link>
                    </div>
                </div>

                <div >
                    <div className={styles.footerIcons}>

                        <Link href="#"><FacebookIcon /></Link>
                        <Link href="#"><InstagramIcon /></Link>
                        <Link href="#"><LinkedInIcon /></Link>
                        <Link href="#"><TwitterIcon /></Link>
                        <Link href="#"><YouTubeIcon /></Link>
                    </div>
                </div>
            </footer>


    )


}
