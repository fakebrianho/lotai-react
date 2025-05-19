'use client'

import Image from 'next/image'
import Header from './components/Header/Header'
import FullContainer from '@/components/FullContainer/FullContainer'
import Content from './components/Content/Content'
import Awards from './components/Awards/Awards'
import Gallery from './components/Gallery/Gallery'
import Selected from './components/Selected/Selected'
import Shows from './components/Shows/Shows'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import SliceZone from '../../components/SliceZone/SliceZone'

export default function Manifesto() {
	// const { data, isLoading } = usePrismicQuery({
	// 	type: 'manifesto',
	// })

	// if (isLoading) {
	// 	return <div>Loading...</div>
	// }

	// return <SliceZone slices={data?.data?.slices} />
	const { data, isLoading } = usePrismicQuery({
		type: 'manifesto',
	})
	const $heroSlice = data?.data?.slices[0]

	const $heroImage = $heroSlice?.primary?.manifesto_hero_image

	const $heroQuote = $heroSlice?.primary?.manifesto_hero_quote

	const biographySlices = data?.data?.slices.filter(
		(slice) => slice.slice_type === 'biography_block'
	)

	console.log(data)
	return (
		<>
			<Header img={$heroImage?.url} quote={$heroQuote} />
			<Content data={biographySlices} />
			<Awards />
			<Gallery />
			<Selected />
		</>
	)
}
