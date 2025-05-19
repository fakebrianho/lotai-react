import * as prismic from '@prismicio/client'

export const repositoryName = 'your-repo-name' // Replace with your repository name

export const client = prismic.createClient(repositoryName, {
	// If you have a custom API endpoint:
	// endpoint: prismic.getEndpoint(repositoryName),
})
