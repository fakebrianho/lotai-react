import { createClient } from '@prismicio/client'
import { notFound } from 'next/navigation'
import BackButtonNeon from '@/components/BackButtonNeon/BackButtonNeon'
import SliceZone from '@/components/SliceZone/SliceZone'
import styles from './page.module.css'

export async function generateStaticParams() {
	const client = createClient('otay')

	try {
		// Get all projectpage documents to ensure we only generate paths for existing documents
		const projects = await client.getAllByType('projectpage')

		// Map actual UIDs from existing documents
		return projects.map((project) => ({
			id: project.uid.replace('project', ''), // Remove 'project' prefix if it exists in UID
		}))
	} catch (error) {
		console.error('Error generating static params:', error)
		return []
	}
}

export default async function ProjectPage({ params }) {
	const client = createClient('otay')

	try {
		// Ensure we're using the correct format for the UID
		// Check if params.id already starts with 'project' to avoid duplication
		const projectID = params.id.startsWith('project')
			? params.id
			: `project${params.id}`

		// Attempt to fetch the project
		const project = await client.getByUID('projectpage', projectID)

		// Only access slices if project exists
		const slices = project?.data?.slices || []

		return (
			<div className={styles.container}>
				<BackButtonNeon url={'mixmedia'} />
				<SliceZone slices={slices} />
			</div>
		)
	} catch (error) {
		console.error(`Error fetching project with ID ${params.id}:`, error)
		// Use Next.js notFound function to show a proper 404 page
		return notFound()
	}
}
