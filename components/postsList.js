import Link from "next/link";
import styles from "@/styles/Posts.module.css"
import {convertToSlug} from "@/components/listItems";


export default function PostsList({ allPostsData }) {
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
                        <article
                            itemScope itemType="http://schema.org/Article">
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


                            </header>
                        </article>
                    </Link>
                );
            })}
        </div>
    );
}