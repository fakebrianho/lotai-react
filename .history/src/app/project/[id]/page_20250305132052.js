import { createClient } from '@prismicio/client'

export async function generateStaticParams() {
	const client = createClient('otay')
	const mixedMedia = await client.getSingle('mixedmedia')
	const slices = mixedMedia?.data?.slices || []
	console.log(mixedMedia)

	return slices.map((_, index) => ({ id: (index + 1).toString() }))
}

export default async function ProjectPage({ params }) {
	console.log(params)
	const client = createClient('otay')
	const mixedMedia = await client.getSingle('mixedmedia')
	const slices = mixedMedia?.data?.slices || []
	const project = slices[parseInt(params.id) - 1]

	if (!project) {
		return <div>Project not found</div>
	}

	return (
		<div>
			<h1>{project.primary.MixedMediaTitle}</h1>
			{/* You can access other slice data like:
            project.primary.MixedMediaImage1.url
            project.primary.MixedMediaURL */}
		</div>
	)
}
