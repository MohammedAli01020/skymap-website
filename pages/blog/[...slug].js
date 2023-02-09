import {fetchPostItem} from "@/utils/RealEstatesAPI";
import Head from "next/head";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import {Code, Heading} from "@chakra-ui/react";
import MDXComponents from "@/components/MDXComponents";

export async function getServerSideProps(context) {

    const {params} = context;
    const { slug } = params;

    const id = slug[0]
    // const title = slug[1]


    try {
        const response = await fetchPostItem(id);
        if (response.ok && response) {

            const post = await response.json();


            // const sss = ` ## wleocme here *wleocm* **msm** hi welcome`;
            const mdxSource = await serialize(post.content,



                // {
                //
                //     // made available to the arguments of any custom mdx component
                //     scope: {},
                //     // MDX's available options, see the MDX docs for more info.
                //     // https://mdxjs.com/packages/mdx/#compilefile-options
                //     mdxOptions: {
                //         remarkPlugins: [],
                //         rehypePlugins: [],
                //         format: 'mdx',
                //     },
                //     // Indicates whether or not to parse the frontmatter from the mdx source
                //     parseFrontmatter: false,
                // }
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

    return<>

        <Head>
            <title>مدنه سكاي ماب</title>

            <meta
                name="description"
                content="مدونه سكاي ماب - sky map تحتوي علي كل ما يخص اخبار العقارات بمدينتي وايضا الاخبار العامة"
            />


            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />
            <link rel="icon" href={"/favicon.ico"} />


            <meta property="twitter:title" content={"سكاي ماب – كل مايخص عقارات مدينتى"}/>
            <meta property="twitter:description" content={"سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"}/>
            <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />
            <meta property="twitter:card" content="summary_large_image" />


            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/`}/>
            <meta property="og:title" content={"سكاي ماب – كل مايخص عقارات مدينتى"}/>
            <meta property="og:description" content={"سكاي ماب أكبر قاعدة بيانات شقق و فيلات محلات تجارية لـ عقارات مدينتى طلعت مصطفي و افضل اسعار شقق مدينتى"}/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/meta-logo.jpeg`} />


            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
        </Head>

        <article itemScope itemType="http://schema.org/Article">
            <header style={{padding: 20}}>
                <div>
                    <h1
                        itemProp="headline"
                    >
                       {post.title}
                    </h1>
                    <p>
                        {new Date(post.createDateTime).toUTCString()}
                    </p>
                </div>
            </header>


            {/*dir={"ltr"} lang={"en"}*/}
            <section  itemProp="articleBody" style={{margin: "0 40px"}}>
                <MDXRemote {...mdxSource} components={components} />
            </section>
        </article>


    </>
}

const components = {
    img: (props) => <img {...props} style={{maxWidth: "100%", maxHeight: "500px"}} />,

}