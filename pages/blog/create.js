import ContactForm from "@/components/contactForm";
import styles from "@/styles/CreatePost.module.css"
import {getSession, useSession} from "next-auth/react";

export default function Create() {

    const {data: session, status: loading} = useSession();


    if (loading === 'loading') {
        return <h1>جاري التحميل ...</h1>
    }


    return<>
        <section className={styles.container}>
            <ContactForm session={session}/>
        </section>

    </>
}


export async function getServerSideProps(context){

    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/blog/create`,
                permanent: false
            }
        }
    }

    return {

        props: {

        }
    }

}
