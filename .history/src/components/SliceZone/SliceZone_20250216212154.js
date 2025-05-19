'use client'

import dynamic from 'next/dynamic'

// Import components from the slices directory
const components = {
	hero_slice: dynamic(() => import('@/slices/HeroSlice')),
	biography_block: dynamic(() => import('@/slices/BiographyBlock')),
	awards: dynamic(() => import('@/slices/Awards')),
	bio: dynamic(() => import('@/slices/Bio')),
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

export default SliceZone
