'use client'
import sound_layout1 from '@/app/sounds/components/sound_layout1/sound_layout1'
import sound_layout2 from '@/app/sounds/components/sound_layout2/sound_layout2'
import sound_layout3 from '@/app/sounds/components/sound_layout3/sound_layout3'
import sound_layout4 from '@/app/sounds/components/sound_layout4/sound_layout4'
import sound_layout5 from '@/app/sounds/components/sound_layout5/sound_layout5'
import project_header_info from '@/app/project/components/project_header_info/project_header_info'
import project_header from '@/app/project/components/project_header/project_header'
import project_paragraph from '@/app/project/components/project_paragraph/project_paragraph'
import project_image from '@/app/project/components/project_image/project_image'
import project_layout2 from '@/app/project/components/project_layout2/project_layout2'
import project_image_layout1 from '@/app/project/components/project_image_layout1/project_image_layout1'
import project_image_layout2 from '@/app/project/components/project_image_layout2/project_image_layout2'
import project_video from '@/app/project/components/project_video/project_video'
import Vimeo from '@/components/Vimeo/Vimeo'
import Menu from '../Menu/Menu'
import MenuItem from '../Menu/MenuItem/MenuItem'
import project_triple from '@/app/project/components/project_triple/project_triple'

const components = {
	sound_layout1: sound_layout1,
	sound_layout2: sound_layout2,
	sound_layout3: sound_layout3,
	sound_layout4: sound_layout4,
	sound_layout5: sound_layout5,
	vimeo: Vimeo,
	mixed_media_info: MenuItem,
	project_header_info: project_header_info,
	project_header: project_header,
	project_paragraph: project_paragraph,
	project_image: project_image,
	project_layout2: project_layout2,
	project_image_layout1: project_image_layout1,
	project_image_layout2: project_image_layout2,
	project_video: project_video,
	project_triple_image: project_triple,
	// hero_slice: Header, // Changed from 'hero' to match Prismic
	// biography_block: Content, // This one was correct
	// awards: Awards,
	// gallery: Gallery,
	// selected: Selected,
	// shows: Shows,
}

function SliceZone({ slices }) {
	// Group slider images together
	const processedSlices = slices.reduce((acc, slice, index) => {
		if (slice.slice_type === 'slider_image') {
			// If we already have a slider group, add to its items
			if (acc.length > 0 && acc[acc.length - 1].type === 'slider_group') {
				acc[acc.length - 1].items.push(slice)
			} else {
				// Create new slider group
				acc.push({
					type: 'slider_group',
					items: [slice],
					id: `slider-group-${index}`,
				})
			}
		} else {
			// Add non-slider slices as is
			acc.push({
				type: slice.slice_type,
				slice: slice,
				id: slice.id,
			})
		}
		return acc
	}, [])

	return (
		<>
			{processedSlices.map((item) => {
				if (item.type === 'slider_group') {
					// Render all slider images in one component
					return (
						<components.slider_image
							slices={item.items}
							key={item.id}
						/>
					)
				}

				const SliceComponent = components[item.type]
				if (!SliceComponent) return null
				return <SliceComponent slice={item.slice} key={item.id} />
			})}
		</>
	)
}

export default SliceZone
