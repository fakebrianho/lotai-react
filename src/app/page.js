import Image from 'next/image'
import { createClient } from '../prismicio'
import { PrismicRichText } from '@prismicio/react'

async function getData() {
	const client = createClient()
	// Replace 'your_type_name' with whatever you named your repeatable type in Prismic
	const items = await client.getAllByType('test')
	console.log('Raw items:', JSON.stringify(items, null, 2)) // More detailed logging

	return { items }
}

export default async function Home() {
	const { items } = await getData()
	return (
		<main>
			{items.map((item) => (
				<div key={item.id}>
					{/* Replace these with your actual field names from Prismic */}
					<h2>{item.data.testtext[0].text}</h2>
					{item.data.image && (
						<img
							src={item.data.image.url}
							alt={item.data.image.alt || ''}
						/>
					)}
					<PrismicRichText field={item.data.testtext} />
				</div>
			))}
		</main>
	)
}
