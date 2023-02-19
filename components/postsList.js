import Link from "next/link";
import styles from "@/styles/Posts.module.css"
import {convertToSlug} from "@/components/listItems";
import {useRouter} from "next/router";


export default function PostsList({ allPostsData }) {

    const router = useRouter();

    return (
        <div className={styles.grid}>
            {allPostsData.map((item, index) => {

                // const even = "bg-gradient-to-r from-purple-800 to-pink-600";
                // const odd = "bg-gradient-to-r from-pink-600 to-orange-400";
                // const linearGradient = index % 2 === 0 ? even : odd;

                const currentPost = allPostsData[index];

                return (
                    <Link
                        key={currentPost.postId}
                        href={`/blog/${currentPost.postId}/${convertToSlug(currentPost.title)}.html`}
                        itemProp="url"
                        className={styles.col}>
                        <article style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}
                            itemScope itemType="http://schema.org/Article" >
                            <header>

                                <img src={currentPost.imageUrl}
                                     height={250}
                                     width="100%"/>

                                <div style={{padding: "0 10px"}}>
                                    <h2 itemProp="headline">
                                        {currentPost.title}
                                    </h2>

                                    <p>{new Date(currentPost.createDateTime).toUTCString()}</p>
                                </div>

                                <div style={{display: "flex", flexWrap:"wrap", gap: "1em"}}>


                                    <button style={{padding: 10, backgroundColor: "green", color: "white"}}
                                    onClick={e => {
                                        e.preventDefault()
                                        router.push({
                                            pathname: "/blog/create",
                                            query: {
                                                postId: currentPost.postId
                                            }
                                        }, "/blog/create").then()
                                    }}>تعديل</button>

                                    {/*<button style={{padding: 10, backgroundColor: "red", color: "white"}}>حذف</button>*/}

                                </div>

                            </header>
                        </article>
                    </Link>
                );
            })}
        </div>
    );
}