export default async function handler(req, res) {


    console.log(req)
    // Check for secret to confirm this is a valid request
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    // Get our API key from 'authorization' header
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    // Compare given token to secret key
    if (token !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }



    // Get paths array from POST request
    const paths = req.body.paths ?? null;
    console.log(typeof paths)
    if (!paths) return res.status(400).json({ message: 'Bad Request: No paths specified' })
// || typeof paths !== 'array'

    try {
        // this should be the actual path not a rewritten path
        // e.g. for "/blog/[slug]" this should be "/blog/post-1"
        // await res.revalidate('/path-to-revalidate')


         paths.forEach(async (p) => {
            await res.revalidate(p)
        })

        return res.json({ revalidated: true })
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send('Error revalidating')
    }
}