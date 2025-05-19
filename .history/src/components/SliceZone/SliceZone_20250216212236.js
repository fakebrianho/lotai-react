'use client'

import Header from '@/app/manifesto/components/Header/Header'
import Content from '@/app/manifesto/components/Content/Content'
import Awards from '@/app/manifesto/components/Awards/Awards'
import Gallery from '@/app/manifesto/components/Gallery/Gallery'
import Selected from '@/app/manifesto/components/Selected/Selected'
import Shows from '@/app/manifesto/components/Shows/Shows'

const components = {
	hero: Header,
	biography_block: Content,
	awards: Awards,
	gallery: Gallery,
	selected: Selected,
	shows: Shows,
}

export const SliceZone = ({ slices }) => {
	return slices?.map((slice, index) => {
		const Component = components[slice.slice_type]
		return Component ? <Component slice={slice} key={index} /> : null
	})
}
