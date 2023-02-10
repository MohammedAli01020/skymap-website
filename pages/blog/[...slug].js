import {fetchPostItem, getAllPosts} from "@/utils/RealEstatesAPI";
import Head from "next/head";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import {convertToSlug} from "@/components/listItems";
import styles from "@/styles/Posts.module.css"

export async function getStaticPaths() {

    const response = await getAllPosts(0);
    const data = await response.json();

    const paths = data.content.map(post => {
        return {
            params: {
                slug: [`${post.postId}`, convertToSlug(post.title)]
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }

}


export async function getStaticProps(context) {

    const {params} = context;
    const {slug} = params;

    const id = slug[0]
    // const title = slug[1]

    try {
        const response = await fetchPostItem(id);
        if (response.ok && response) {

            const post = await response.json();

            const mdxSource = await serialize(post.content,
                {
                    // made available to the arguments of any custom mdx component
                    scope: {},
                    // MDX's available options, see the MDX docs for more info.
                    // https://mdxjs.com/packages/mdx/#compilefile-options
                    mdxOptions: {
                        remarkPlugins: [],
                        rehypePlugins: [],
                        format: 'mdx',
                    },
                    // Indicates whether or not to parse the frontmatter from the mdx source
                    parseFrontmatter: true,
                }
            )
            return {
                props: {
                    post,
                    mdxSource
                },
            }
        } else {
            return {
                notFount: true
            }
        }

    } catch (e) {
        return {
            notFount: true
        }
    }


}


export default function PostDetails({post, mdxSource}) {

    return <>

        <Head>
            <title>{post.title}</title>

            <meta
                name="description"
                content={post.description}
            />


            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="apple-touch-icon" href={post.imageUrl}/>
            <link rel="icon" href={"/favicon.ico"}/>


            <meta property="twitter:title" content={post.title}/>
            <meta property="twitter:description" content={post.description}/>
            <meta property="twitter:image" content={post.imageUrl}/>
            <meta property="twitter:card" content="summary_large_image"/>


            <meta property="og:type" content="website"/>
            <meta property="og:url"
                  content={`${process.env.NEXT_PUBLIC_BASE_URL}/${post.postId}/${convertToSlug(post.title)}`}/>
            <meta property="og:title" content={post.title}/>
            <meta property="og:description" content={post.description}/>
            <meta property="og:image" content={post.imageUrl}/>

        </Head>

        <article itemScope itemType="http://schema.org/BlogPosting" className={styles.article}>
            <meta itemProp="image" content={post.imageUrl}/>

            <header style={{padding: 20}}>
                <div>
                    <h1
                        itemProp="headline"
                    >
                        {post.title}
                    </h1>

                    <div>
                        <span itemProp="datePublished" content={new Date(post.createDateTime).toUTCString()}>
                          تاريخ النشر:{new Date(post.createDateTime).toUTCString()}
                        </span>


                        {post.lastUpdateDateTime && (
                            <span itemProp="dateModified" content={new Date(post.lastUpdateDateTime).toUTCString()}>
                              اخر تحديث: {new Date(post.lastUpdateDateTime).toUTCString()}
                            </span>
                        )
                        }

                    </div>


                    {post.author && (

                        <div>
                        بواسطة
                            <span itemProp="author" itemScope itemType="https://schema.org/Person">
                                <a itemProp="url" href="#">
                                   <span itemProp="name">{post.author.username}</span>

                                </a>
                            </span>

                        </div>
                    )}

                </div>
            </header>


            {/*dir={"ltr"} lang={"en"}*/}
            <section itemProp="articleBody" style={{margin: "0 40px"}}>
                <MDXRemote {...mdxSource} components={components}/>
            </section>
        </article>


    </>
}

const components = {
    img: (props) => <img {...props} style={{maxWidth: "100%", maxHeight: "500px"}}/>,


}