import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export const repositoryName = 'otay' // Change this to your Prismic repository name

export function createClient(config = {}) {
	const client = prismic.createClient(repositoryName, {
		routes: [
            routes: [
                {
                  type: 'homepage',
                  path: '/',
                },
                {
                  type: 'blog_post',
                  path: '/blog/:uid'
                }
              ]
		],
		...config,
	})

	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req,
	})

	return client
}
