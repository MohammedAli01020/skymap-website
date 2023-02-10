import { getServerSideSitemap } from 'next-sitemap'
import {convertToSlug} from "@/components/listItems";
import {subCatNames} from "@/pages/details/[...slug]";

export const buildTitleForSiteMap = (item) => {
    if (item.phase) {
        const obj = item.objective === 0 ? "للبيع": "للايجار";
        return `${subCatNames.get(item.subCat)} ${obj} بالمرحلة ${item.phase}` ;
    } else {
        const obj = item.objective === 0 ? "للبيع": "للايجار";
        return `${subCatNames.get(item.subCat)} ${obj}` ;
    }
}


export async function getServerSideProps (context) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/realestates/sitemap`)

    const data = await response.json();

    console.log(data)

    const fields = data.map(item => {

        return  {
            loc: `${process.env.NEXT_PUBLIC_BASE_URL}/details/${item.id}/${convertToSlug(buildTitleForSiteMap(item))}.html`,
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