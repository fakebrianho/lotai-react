import { createClient } from '@prismicio/client'
import SliceZone from '@/components/SliceZone/SliceZone'

export async function generateStaticParams() {
	const client = createClient('otay')
	const mixedMedia = await client.getSingle('mixedmedia')
	const slices = mixedMedia?.data?.slices || []

	return slices.map((_, index) => ({ id: `project${index + 1}` }))
}

export default async function ProjectPage({ params }) {
	const client = createClient('otay')
	const projectID = `project${params.id}`
	const project = await client.getByUID('projectpage', projectID)
	const slices = project?.data?.slices || []

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

	return <SliceZone slices={slices} />
}
