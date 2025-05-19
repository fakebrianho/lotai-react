import React from 'react'
import styles from './sound_layout2.module.css'

function sound_layout2(props) {
	console.log(props)
	let count
	let images = []
	if (props?.slice?.primary) {
		images = Object.entries(props.slice.primary)
			.filter(
				([key, value]) => key.startsWith('s_lo2_image_') && value.url
			)
			.map(([key, value]) => value)
	}
	console.log(images)
	return (
		<section className={styles.container}>
			<div className={styles.left}>
				{images.map((image, index) => (
					<img
						key={index}
						id={`index}
						src={image.url}
						alt={image.alt || `Image ${index + 1}`}
					/>
				))}
			</div>
			<div className={styles.right}></div>
		</section>
	)
}

export default sound_layout2
