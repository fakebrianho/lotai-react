import { createClient } from '@prismicio/client'
export async function generateStaticParams() {
	const client = createClient()
	const projects = await client.getAllByType('project')

	return projects.map((_, index) => ({
		id: (index + 1).toString(),
	}))
}
export default async function ProjectPage({ params }) {
	const client = createClient()
	const projects = await client.getAllByType('project')
	const project = projects[parseInt(params.id) - 1]

	return (
		<div>
			<h1>{project.data.name}</h1>
		</div>
	)
}
