import { getServerSideSitemap } from 'next-sitemap'
import {convertToSlug} from "@/components/listItems";

export async function getServerSideProps (context) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/sitemap`)

    const data = await response.json();

    console.log(data)

    const fields = data.map(item => {

        return  {
            loc: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${item.id}/${convertToSlug(item.title)}.html`,
            lastmod: item.lastUpdateDateTime != null ?
                new Date(item.lastUpdateDateTime).toISOString()
                : item.createDateTime != null ?
                    new Date(item.createDateTime).toISOString() :
                    new Date().toISOString(),


            changefreq: "weekly",
            priority: "0.8"
        }
    })

    return getServerSideSitemap(context, fields)
}





// Default export to prevent next.js errors
export default function Sitemap() {}