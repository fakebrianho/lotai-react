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
import ProjectSlider from '@/app/project/components/project_slider/project_slider'
import ProjectSlideshow from '@/app/project/components/project_slideshow/project_slideshow'
import project_image_layout3 from '@/app/project/components/project_image_layout3/project_image_layout3'
import project_embed from '@/app/project/components/project_embed/project_embed'
import project_image_layout4 from '@/app/project/components/project_image_layout4/project_image_layout4'
import EnterButton from '@/app/project/components/EnterButton/EnterButton'
import project_image_layout5 from '@/app/project/components/project_image_layout5/project_image_layout5'
import project_image_layout6 from '@/app/project/components/project_image_layout6/project_image_layout6'
import project_image_layout7 from '@/app/project/components/project_image_layout7/project_image_layout7'
import project_image_layout8 from '@/app/project/components/project_image_layout8/project_image_layout8'
import project_image_layout10 from '@/app/project/components/project_image_layout10/project_image_layout10'
import VideoGallery from '@/app/vp/VideoGallery/VideoGallery'

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
	project_image_layout3: project_image_layout3,
	project_image_layout4: project_image_layout4,
	project_image_layout5: project_image_layout5,
	project_image_layout6: project_image_layout6,
	project_image_layout7: project_image_layout7,
	project_image_layout8: project_image_layout8,
	project_image_layout10: project_image_layout10,
	project_video: project_video,
	project_triple_image: project_triple,
	media_embed: project_embed,
	enter_button: EnterButton,
	// slider_image: project_slider,
	// hero_slice: Header, // Changed from 'hero' to match Prismic
	// biography_block: Content, // This one was correct
	// awards: Awards,
	// gallery: Gallery,
	// selected: Selected,
	// shows: Shows,
}

function SliceZone({ slices }) {
	let sliderImages = []
	let videoImages = []

	return (
		<>
			{slices.map((slice, idx) => {
				if (slice.slice_type === 'slider_image') {
					sliderImages.push(slice)
					if (
						idx === slices.length - 1 ||
						slices[idx + 1].slice_type !== 'slider_image'
					) {
						const slideshow = (
							<ProjectSlideshow key={`slideshow-${idx}`}>
								{sliderImages.map((sliderSlice, i) => (
									<ProjectSlider
										key={`slider-image-${i}`}
										data={sliderSlice}
									/>
								))}
							</ProjectSlideshow>
						)
						sliderImages = [] // Reset the sliderImages array
						return slideshow
					}
					return null // Skip rendering individual slider images
				} else if (slice.slice_type === 'videoImage') {
					videoImages.push(slice)
					if (
						idx === slices.length - 1 ||
						slices[idx + 1].slice_type !== 'videoImage'
					) {
						const videoGallery = (
							<VideoGallery key={`slideshow-${idx}`}>
								{/* {sliderImages.map((sliderSlice, i) => (
									<ProjectSlider
										key={`slider-image-${i}`}
										data={sliderSlice}
									/>
								))} */}
							</VideoGallery>
						)
						videoImages = []
						return videoGallery
					}
					return null
				} else {
					const SliceComponent = components[slice.slice_type]
					if (!SliceComponent) {
						return null
					}
					return <SliceComponent slice={slice} key={`slice-${idx}`} />
				}
			})}
		</>
	)
}

export default SliceZone
