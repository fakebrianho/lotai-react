'use client'

const components = {
	// hero_slice: Header, // Changed from 'hero' to match Prismic
	// biography_block: Content, // This one was correct
	// awards: Awards,
	// gallery: Gallery,
	// selected: Selected,
	// shows: Shows,
}

function SliceZone({ slices }) {
	console.log('Full slice data:', slices)
	// return slices?.map((slice, index) => {
	// 	console.log('Current slice:', slice)
	// 	console.log('Slice type:', slice.slice_type)
	// 	console.log('Component found:', components[slice.slice_type])
	// 	const Component = components[slice.slice_type]
	// 	return Component ? <Component slice={slice} key={index} /> : null
	// })
	return <h1> hello world</h1>
}

export default SliceZone
