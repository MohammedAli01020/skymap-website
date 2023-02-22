import styles from '@/styles/Header.module.css'
import Link from "next/link";
import {signOut, signIn, useSession} from "next-auth/react";
import {useDispatch, useSelector} from "react-redux";
import {setActive, setSelected} from "@/store/headerSlice";


export default function Header() {


    const {data: session, status: loading} = useSession();

    const state = useSelector((state) => state.header)
    const dispatch = useDispatch()

    // const [selected, setSelected] = useState("/");
    // const [active, setActive] = useState(false);


    return <>

        <header className={styles.header} itemProp={"hasPart"} itemScope itemType={"http://schema.org/WPHeader"}>
            <div onClick={event => {
                event.preventDefault()
                dispatch(setSelected("/"))
            }
            }>
                <Link href={"/"} className={styles.logo}>
                   Sky Map
                </Link>


            </div>

            <div className={styles.menu} onClick={event => {
                event.preventDefault()
                dispatch(setActive(!state.active))
            }
            }>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>

            </div>

            <div className={`${styles.navBar}  ${state.active ? styles.active : ""}`}>
                <ul>
                    <li onClick={e => {
                        e.preventDefault()
                        dispatch(setSelected("about"))
                        dispatch(setActive(false))
                    }
                    }>
                        <Link href={"/about"} className={state.selected === 'about' ? `${styles.active}` : ""}>عن
                            الشركة</Link>
                    </li>
                    <li onClick={e => {

                        e.preventDefault()
                        dispatch(setSelected("blog"))
                        dispatch(setActive(false))
                    }
                    }>
                        <Link href={"/blog"} className={state.selected === 'blog' ? `${styles.active}` : ""}>المدونة</Link>
                    </li>

                    <li onClick={e => {

                        e.preventDefault()
                        dispatch(setSelected("contact"))
                        dispatch(setActive(false))

                    }
                    }>
                        <Link href={"/contact"} className={state.selected === 'contact' ? `${styles.active}` : ""}>تواصل
                            معنا</Link>
                    </li>

                    <li onClick={e => {

                        e.preventDefault()
                        dispatch(setSelected("/"))
                        dispatch(setActive(false))

                    }
                    }>
                        <Link href={"/"} className={state.selected === '/' ? `${styles.active}` : ""}>الرئيسية</Link>
                    </li>


                    {loading !== "loading" && !session && (
                        <li >
                            <Link href={"/api/auth/signin"} legacyBehavior >
                                <a onClick={e => {
                                    e.preventDefault()
                                    // setActive(false)
                                    dispatch(setActive(false))
                                    signIn().then()
                                }}
                                    >دخول</a>

                        </Link>
                        </li>
                    )}


                    {loading !== "loading" && loading === 'authenticated' && session && (
                        <li >
                            <Link href={"/api/auth/signout"} legacyBehavior >
                                <a onClick={e => {
                                    e.preventDefault()
                                    // setActive(false)
                                    dispatch(setActive(false))
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

}



