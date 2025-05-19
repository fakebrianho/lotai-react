import React, { useRef, useEffect } from 'react'
import styles from './sound_layout2.module.css'
import gsap from 'gsap'

function sound_layout2(props) {
	let images = []
	if (props?.slice?.primary) {
		images = Object.entries(props.slice.primary)
			.filter(
				([key, value]) => key.startsWith('s_lo2_image_') && value.url
			)
			.map(([key, value]) => value)
	}
	let cells
	let carousel
	let cellCount = images.length
	let selectedIndex = 0
	var cellWidth
	var cellHeight
	var isHorizontal = true
	var rotateFn = 'rotateY'

	var radius
	var theta = 360 / cellCount

	const imageRefs = useRef([])
	const carouselRef = useRef(null)

	useEffect(() => {
		// Ensure the refs are populated before the first rotation
		rotateCarousel()
	}, [images])

	function rotateCarousel() {
		imageRefs.current.forEach((imgRef, index) => {
			if (imgRef) {
				gsap.to(imgRef, {
					opacity: index === selectedIndex ? 1 : 0,
					duration: 1,
				})
			}
		})

		if (carouselRef.current) {
			const angle = theta * selectedIndex * -1
			carouselRef.current.style.transform =
				'translateZ(' +
				-radius +
				'px) ' +
				rotateFn +
				'(' +
				angle +
				'deg)'
		}
	}

	return (
		<section className={styles.container}>
			<div className={styles.left}>
				{images.map((image, index) => (
					<img
						key={index}
						ref={(el) => (imageRefs.current[index] = el)}
						className={`${styles.image} ${styles[`image${index}`]}`}
						src={image.url}
						alt={image.alt || `Image ${index + 1}`}
					/>
				))}
			</div>
			<div className={styles.right}>
				<div className={styles.text}>
					<p>{props?.slice?.primary?.s_lo2_information}</p>
				</div>
				<div className={styles.carouselContainer}>
					<div className={styles.carousel} ref={carouselRef}>
						{images.map((image, index) => (
							<div className={styles.carousel__cell} key={index}>
								<img src={image.url} alt='' />
							</div>
						))}
					</div>
				</div>
				<div className={styles.carouselNav}>
					<img
						className={styles.previousButton}
						src='./larrowq.png'
						onClick={() => {
							selectedIndex =
								(selectedIndex - 1 + images.length) %
								images.length
							rotateCarousel()
						}}
					></img>
					<img
						className={styles.nextButton}
						onClick={() => {
							selectedIndex = (selectedIndex + 1) % images.length
							rotateCarousel()
						}}
						src='./rarrow.png'
					></img>
				</div>
			</div>
		</section>
	)
}

export default sound_layout2
