import { createClient } from '@prismicio/client'
export async function generateStaticParams() {
	const client = createClient()
	const projects = await client.getAllByType('project')

	return projects.map((_, index) => ({
		id: (index + 1).toString(),
	}))
}
