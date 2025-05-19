import { createClient } from '@prismicio/client'
import BackButtonNeon from '@/components/BackButtonNeon/BackButtonNeon'
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
	if (!project) {
		return <div>Project not found</div>
	}

	return (
		<>
			<BackButtonNeon />
			<SliceZone slices={slices} />
		</>
	)
}
