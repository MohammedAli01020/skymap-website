import { getServerSideSitemap } from 'next-sitemap'
import {convertToSlug} from "@/components/listItems";
import {buildTitle, subCatNames} from "@/pages/details/[...slug]";

// export const buildTitleForSiteMap = (item) => {
//     if (item.phase) {
//         const obj = item.objective === 0 ? "للبيع": "للايجار";
//         return `${subCatNames.get(item.subCat)} ${obj} بالمرحلة ${item.phase} في مدينتي` ;
//     } else {
//         const obj = item.objective === 0 ? "للبيع": "للايجار";
//         return `${subCatNames.get(item.subCat)} ${obj} في مدينتي` ;
//     }
// }


export async function getServerSideProps (context) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/realestates/sitemap`)

    const data = await response.json();

    const fields = data.map(item => {

        return  {
            loc: `https://main.d2hqtqv4zfjkly.amplifyapp.com/details/${item.id}/${convertToSlug(buildTitle(item))}.html`,
            lastmod: item.lastUpdateDateTime != null ?
                new Date(item.lastUpdateDateTime).toISOString()
                : item.creationDateTime != null ?
                    new Date(item.creationDateTime).toISOString() :
                    new Date().toISOString(),


            changefreq: "weekly",
            priority: "0.8"
        }
    })

    return getServerSideSitemap(context, fields)
}



// Default export to prevent next.js errors
export default function Sitemap() {}