/** @type {import('next-sitemap').IConfig} */


const siteUrl = "https://main.d2hqtqv4zfjkly.amplifyapp.com";

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            `${siteUrl}/server-sitemap.xml`,
            `${siteUrl}/sitemap.xml`,
            `${siteUrl}/sitemap-0.xml`,
        ]
    }

}