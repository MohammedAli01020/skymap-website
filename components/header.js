import styles from '@/styles/Header.module.css'
import Link from "next/link";
import {signOut, signIn, useSession} from "next-auth/react";
import {useState} from "react";


export default function Header() {


    const {data: session, status: loading} = useSession();

    const [selected, setSelected] = useState("/");
    const [active, setActive] = useState(false);


    return <>

        <header className={styles.header} itemProp={"hasPart"} itemScope itemType={"http://schema.org/WPHeader"}>
            <div>
                <Link href={"/"} className={styles.logo}>
                   Sky Map
                </Link>


            </div>

            <div className={styles.menu} onClick={event => {
                event.preventDefault()
                console.log(active)
                setActive(!active)
            }
            }>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>

            </div>

            <div className={`${styles.navBar}  ${active ? styles.active : ""}`}>
                <ul>
                    <li onClick={e => {

                        console.log("about")
                        e.preventDefault()
                        setSelected("about")
                        setActive(false)
                    }
                    }>
                        <Link href={"/about"} className={selected === 'about' ? `${styles.active}` : ""}>عن
                            الشركة</Link>
                    </li>
                    <li onClick={e => {

                        e.preventDefault()
                        setSelected("blog")
                        setActive(false)
                    }
                    }>
                        <Link href={"/blog"} className={selected === 'blog' ? `${styles.active}` : ""}>المدونة</Link>
                    </li>

                    <li onClick={e => {

                        e.preventDefault()
                        setSelected("contact")
                        setActive(false)
                    }
                    }>
                        <Link href={"/contact"} className={selected === 'contact' ? `${styles.active}` : ""}>تواصل
                            معنا</Link>
                    </li>

                    <li onClick={e => {

                        e.preventDefault()
                        setSelected("/")
                        setActive(false)
                    }
                    }>
                        <Link href={"/"} className={selected === '/' ? `${styles.active}` : ""}>الرئيسية</Link>
                    </li>


                    {loading !== "loading" && !session && (
                        <li >
                            <Link href={"/api/auth/signin"} legacyBehavior>
                                <a onClick={e => {
                                    e.preventDefault()
                                    setActive(false)
                                    signIn().then()
                                }}
                                    >دخول</a>

                        </Link>
                        </li>
                    )}


                    {loading !== "loading" && loading === 'authenticated' && session && (
                        <li>
                            <Link href={"/api/auth/signout"} legacyBehavior>
                                <a onClick={e => {
                                    e.preventDefault()
                                    setActive(false)
                                    signOut().then()
                                }}>
                                    مرحبا {session.user?.username} |خروج|
                                </a>
                            </Link>
                        </li>
                    )}


                </ul>

            </div>
        </header>
    </>

    // return(
    //     <header className={styles.header} itemProp={"hasPart"} itemScope itemType={"http://schema.org/WPHeader"}>
    //         <Link href="/" passHref >
    //             <Image
    //                 property={false}
    //                 width={40}
    //                 height={40}
    //                 // objectFit={'contain'}
    //                 className={styles.headerLog}
    //                 src='/logo192.png'
    //                 alt='logo192'/>
    //
    //         </Link>
    //
    //         <div className={styles.headerItem}  onClick={event => {
    //             console.log(process.env.NEXT_PUBLIC_TEST)
    //             console.log(process.env.NEXT_PUBLIC_AWS)
    //
    //         }}>
    //             <LocationOnIcon className={styles.headerItemIcon} />
    //             <p className={styles.headerItemText}>مجمع البنوك الدور الثاني - مدينتي</p>
    //
    //         </div>
    //
    //         <div className={styles.headerItemTwo}>
    //             <PhoneIcon className={styles.headerItemIcon} />
    //             <a href={"tel:+201112233266"} className={styles.headerItemText}  >⁦+20 111 223 3266⁩</a>
    //
    //         </div>
    //
    //
    //         {loading !== "loading" && session && (
    //
    //             <button onClick={e => {
    //                 e.preventDefault();
    //                 signOut().then(r => {});
    //             }}>logout {session.user.username}</button>
    //         )}
    //
    //         {loading !== "loading" && !session && (
    //             <button onClick={e => {
    //                 e.preventDefault();
    //                 signIn().then(r => {});
    //             }}>
    //                 login
    //             </button>
    //         )}
    //
    //     </header>
    // )


}



