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
	return <main></main>
}
