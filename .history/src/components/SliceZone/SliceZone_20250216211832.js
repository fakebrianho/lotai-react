'use client'

import Header from '@/app/manifesto/components/Header/Header'
import Content from '@/app/manifesto/components/Content/Content'
import Awards from '@/app/manifesto/components/Awards/Awards'
import Gallery from '@/app/manifesto/components/Gallery/Gallery'
import Selected from '@/app/manifesto/components/Selected/Selected'
import Shows from '@/app/manifesto/components/Shows/Shows'

// Separate the components map for better maintainability
const components = {
	hero: ({ slice }) => (
		<Header
			img={slice.primary.manifesto_hero_image?.url}
			quote={slice.primary.manifesto_hero_quote}
		/>
	),
	biography_block: ({ slice }) => <Content data={[slice]} />,
	awards: Awards,
	gallery: Gallery,
	selected: Selected,
	shows: Shows,
}

export const SliceZone = ({ slices = [] }) => {
	// Early return if no slices
	if (!slices || slices.length === 0) {
		return null
	}

	return slices.map((slice, index) => {
		const Component = components[slice.slice_type]

		if (!Component) {
			console.warn(
				`No component found for slice type: ${slice.slice_type}`
			)
			return null
		}

		return <Component slice={slice} key={`${slice.slice_type}-${index}`} />
	})
}
