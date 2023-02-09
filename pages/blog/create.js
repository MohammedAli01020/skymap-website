import ContactForm from "@/components/contactForm";
import styles from "@/styles/CreatePost.module.css"
import {getSession} from "next-auth/react";

export default function Create({session}) {

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
            session
        }
    }

}
