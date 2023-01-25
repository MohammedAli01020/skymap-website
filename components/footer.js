
import styles from '@/styles/Footer.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return (
        <>
            {/*<div style={{*/}

            {/*    padding: "20px",*/}
            {/*    height:"300px",*/}
            {/*    width: "100%",*/}
            {/*    backgroundColor: "#131912",*/}

            {/*}}>*/}
            {/*    <h1 style={{color: "wheat", fontSize: 20}}>عقارت مدينتي للبيع وللايجار</h1>*/}
            {/*    <h1 style={{color: "wheat", fontSize: 20}}>شركة سكاي ماب للتسويق العقاري بمدينتي - بمجمع البنوك - الدور الثاني</h1>*/}
            {/*</div>*/}



            <footer className={styles.footer}>

                <div >
                    <h3>Sky<span>Map</span></h3>

                    <p >
                        <a href="#">الرئيسية</a>
                        |
                        <a href="#">عن الشركة</a>
                        |
                        <a href="#">تواصل معنا</a>
                        |
                        <a href="#">المدونه</a>
                    </p>

                    <p >Copyright © 2023 <strong>سكاي ماب</strong> جميع الحقوق محفوظة لدي شركة</p>
                </div>

                <div >
                    <div>
                        <p><span>القاهرة</span>
                            مدينتي - مجمع البنوك الدور الثاني</p>
                    </div>

                    <div>
                         <a href={"tel:+201112233266"}  >⁦+20 111 223 3266⁩</a>

                    </div>
                    <div>
                        <p><a href="mailto:mohamedalivip6@gmail.com">xyz@gmail.com</a></p>
                    </div>
                </div>

                <div >
                    <div className={styles.footerIcons}>
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><LinkedInIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><YouTubeIcon /></a>
                    </div>
                </div>
            </footer>

        </>
    )


}
