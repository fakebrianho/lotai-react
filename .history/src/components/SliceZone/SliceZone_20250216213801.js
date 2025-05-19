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

export default SliceZone
