import { createClient } from '@prismicio/client'
import BackButtonNeon from '@/components/BackButtonNeon/BackButtonNeon'
import SliceZone from '@/components/SliceZone/SliceZone'

export async function generateStaticParams() {
	const client = createClient('otay')
	const mixedMedia = await client.getSingle('video')
	const slices = mixedMedia?.data?.slices || []
	console.log('scli', slices)

	return slices.map((_, index) => ({ id: `video${index + 1}` }))
}

export default async function ProjectPage({ params }) {
	const client = createClient('otay')
	console.log('param', params)
	const videoID = `video${params.id}`
	console.log(videoID)
	const project = await client.getByUID('video', videoID)
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
