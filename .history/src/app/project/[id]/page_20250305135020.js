import { createClient } from '@prismicio/client'

export async function generateStaticParams() {
	const client = createClient('otay')
	const mixedMedia = await client.getSingle('mixedmedia')
	const slices = mixedMedia?.data?.slices || []
	console.log(mixedMedia)

	return slices.map((_, index) => ({ id: `project${index + 1}` }))
}

export default async function ProjectPage({ params }) {
	console.log(params.id)
	const client = createClient('otay')
	const projectID = `project${params.id}`
	console.log(projectID)
	const project = await client.getByUID('projectpage', projectID)
	console.log(project)
	const mixedMedia = await client.getSingle('mixedmedia')

	// const test = await client.getByID('')
	// const slices = mixedMedia?.data?.slices || []
	// Extract the number from "project1", "project2", etc.
	// const projectNumber = params.id.replace('project', '')
	// const project = slices[parseInt(projectNumber) - 1]
	// console.log('pn', projectNumber)
	// console.log('proje', project)
	if (!project) {
		return <div>Project not found</div>
	}

	return (
		<div>
			{/* <h1>{project.primary.MixedMediaTitle}</h1> */}
			{/* You can access other slice data like:
            project.primary.MixedMediaImage1.url
            project.primary.MixedMediaURL */}
		</div>
	)
}
