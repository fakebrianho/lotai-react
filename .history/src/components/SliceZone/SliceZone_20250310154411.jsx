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
import project_slider from '@/app/project/components/project_slider/project_slider'
import project_slideshow from '@/app/project/components/project_slideshow/project_slideshow'

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
	slider_image: project_slider,
	// hero_slice: Header, // Changed from 'hero' to match Prismic
	// biography_block: Content, // This one was correct
	// awards: Awards,
	// gallery: Gallery,
	// selected: Selected,
	// shows: Shows,
}

function SliceZone({ slices }) {
	console.log(slices)
	const sliceImageComponents = slices.filter(
		(slice) => slice.slice_type === 'slider_image'
	)
	console.log(sliceImageComponents.length)
	const otherComponents = slices.filter(
		(slice) => slice.slice_type !== 'slider_image'
	)

	return (
		<>
			{sliceImageComponents.length > 0 && (
				// <project_slider />
				<h1>hello world</h1>
				// <project_slideshow>
				// 	{sliceImageComponents.map((slice, idx) => (
				// 		<project_slider
				// 			slice={slice}
				// 			key={`slice_image-${idx}`}
				// 		/>
				// 	))}
				// </project_slideshow>
			)}
			<h1>hello world</h1>
			{otherComponents.map((slice, idx) => {
				const SliceComponent = components[slice.slice_type]
				if (!SliceComponent) {
					return null
				}
				return <SliceComponent slice={slice} key={`slice-${idx}`} />
			})}
			{/* {slices.map((slice, idx) => {
				if (slice.slice_type === 'slider_image') {
					console.log('i')
				}
				const SliceComponent = components[slice.slice_type]
				if (!SliceComponent) {
					// If no matching slice component is found,
					// you can return null or a fallback component
					return null
				}
				return <SliceComponent slice={slice} key={`slice-${idx}`} />
			})} */}
		</>
	)
}

export default SliceZone
