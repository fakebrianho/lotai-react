import { createClient } from '@prismicio/client'
import BackButtonNeon from '@/components/BackButtonNeon/BackButtonNeon'
import SliceZone from '@/components/SliceZone/SliceZone'
import styles from './page.module.css'

export async function generateStaticParams() {
	const client = createClient('otay')
	const mixedMedia = await client.getSingle('video')
	const slices = mixedMedia?.data?.slices || []
	return slices.map((_, index) => ({ id: `video${index + 1}` }))
}

export default async function ProjectPage({ params }) {
	const client = createClient('otay')
	const videoID = `video${params.vp}`
	const project = await client.getByUID('videopage', videoID)
	const slices = project?.data?.slices || []
	if (!project) {
		return <div>Project not found</div>
	}

	return (
		<div className={styles.container}>
			<BackButtonNeon url={'video'} />
			<SliceZone slices={slices} />
		</div>
	)
}
