import { createClient } from '@prismicio/client'

export async function generateStaticParams() {
	const client = createClient()
	const mixedMedia = await client.getAllByType('mixedmedia')
	const slices = mixedMedia[0]?.data?.slices || []
	console.log(mixedMedia)

	return slices.map((_, index) => ({
		id: (index + 1).toString(),
	}))
}

export default async function ProjectPage({ params }) {
	const client = createClient()
	const mixedMedia = await client.getAllByType('mixedmedia')
	const slices = mixedMedia[0]?.data?.slices || []
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
