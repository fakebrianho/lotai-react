import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export const repositoryName = 'otay' // Change this to your Prismic repository name

export function createClient(config = {}) {
	const client = prismic.createClient(repositoryName, {
		routes: [
			// You can add your routes here like:
			// {
			//   type: 'homepage',
			//   path: '/',
			// },
			// {
			//   type: 'page',
			//   path: '/:uid',
			// },
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
