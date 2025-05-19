'use client'

import Header from '@/app/manifesto/components/Header/Header'
import Content from '@/app/manifesto/components/Content/Content'
import Awards from '@/app/manifesto/components/Awards/Awards'
import Gallery from '@/app/manifesto/components/Gallery/Gallery'
import Selected from '@/app/manifesto/components/Selected/Selected'
import Shows from '@/app/manifesto/components/Shows/Shows'

const components = {
	hero_slice: Header, // Changed from 'hero' to match Prismic
	biography_block: Content, // This one was correct
	awards: Awards,
	gallery: Gallery,
	selected: Selected,
	shows: Shows,
}

export const SliceZone = ({ slices }) => {
	console.log('Full slice data:', slices)
	return slices?.map((slice, index) => {
		console.log('Current slice:', slice)
		console.log('Slice type:', slice.slice_type)
		console.log('Component found:', components[slice.slice_type])
		const Component = components[slice.slice_type]
		return Component ? <Component slice={slice} key={index} /> : null
	})
}
