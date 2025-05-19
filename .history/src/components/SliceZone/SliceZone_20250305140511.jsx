'use client'
import sound_layout1 from '@/app/sounds/components/sound_layout1/sound_layout1'
import sound_layout2 from '@/app/sounds/components/sound_layout2/sound_layout2'
import sound_layout3 from '@/app/sounds/components/sound_layout3/sound_layout3'
import sound_layout4 from '@/app/sounds/components/sound_layout4/sound_layout4'
import sound_layout5 from '@/app/sounds/components/sound_layout5/sound_layout5'
import project_header_info from '@/app/project/components/project_header_info/project_header_info'
// import project_header from '@/app/project/components/project_header'
import Vimeo from '@/components/Vimeo/Vimeo'
import Menu from '../Menu/Menu'
import MenuItem from '../Menu/MenuItem/MenuItem'

const components = {
	sound_layout1: sound_layout1,
	sound_layout2: sound_layout2,
	sound_layout3: sound_layout3,
	sound_layout4: sound_layout4,
	sound_layout5: sound_layout5,
	vimeo: Vimeo,
	mixed_media_info: MenuItem,
	project_header_info: project_header_info,

	// hero_slice: Header, // Changed from 'hero' to match Prismic
	// biography_block: Content, // This one was correct
	// awards: Awards,
	// gallery: Gallery,
	// selected: Selected,
	// shows: Shows,
}

function SliceZone({ slices }) {
	console.log(slices)
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
