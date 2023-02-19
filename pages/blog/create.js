import ContactForm from "@/components/contactForm";
import styles from "@/styles/CreatePost.module.css"
import {getSession, useSession} from "next-auth/react";
import {fetchPostItem} from "@/utils/RealEstatesAPI";

export default function Create({post}) {

    const {data: session, status: loading} = useSession();


    if (loading === 'loading') {
        return <h1>جاري التحميل ...</h1>
    }


    return<>
        <section className={styles.container}>
            <ContactForm session={session} post={post}/>
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


    const query = context.query;

    if (query.postId) {
        try {
            const response = await fetchPostItem(query.postId);
            if (response.ok || !response) {
                const post = await response.json();
                return {
                    props: {
                        post
                    }
                }
            } else {
                return {
                    notFound: true
                }
            }

        } catch (e) {
            return {
                notFound: true
            }
        }
    }

    return {
        props: {

        }
    }

}
