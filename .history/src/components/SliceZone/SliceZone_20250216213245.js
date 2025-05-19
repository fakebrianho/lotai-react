'use client'

import Header from '@/app/manifesto/components/Header/Header'
import Content from '@/app/manifesto/components/Content/Content'
import Awards from '@/app/manifesto/components/Awards/Awards'
import Gallery from '@/app/manifesto/components/Gallery/Gallery'
import Selected from '@/app/manifesto/components/Selected/Selected'
import Shows from '@/app/manifesto/components/Shows/Shows'

// Map slice_type to the corresponding component
const components = {
	hero_slice: Hero,
	biography_block: BiographyBlock,
	awards_block: Awards,
	gallery_block: Gallery,
	selected_block: Selected,
}

export default function SliceZone({ slices }) {
	return (
		<>
			{slices.map((slice, idx) => {
				const SliceComponent = components[slice.slice_type]
				if (!SliceComponent) {
					// If no matching slice component is found,
					// you can return null or a fallback component
					return null
				}
				return <SliceComponent slice={slice} key={`slice-${idx}`} />
			})}
		</>
	)
}
