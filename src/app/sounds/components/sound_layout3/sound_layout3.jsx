import styles from './sound_layout3.module.css'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

function sound_layout3(props) {
	let images = []
	if (props?.slice?.primary) {
		images = Object.entries(props.slice.primary)
			.filter(
				([key, value]) => key.startsWith('s_lo3_carousel_') && value.url
			)
			.map(([key, value]) => value)
	}
	let cellCount = images.length
	let selectedIndex = 0
	var cellWidth = 200 // Example width, adjust as needed
	var cellHeight = 200 // Example height, adjust as needed
	var isHorizontal = true
	var rotateFn = 'rotateY'

	var radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount))
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

	const carouselClass = `${styles.carouselContainer} ${
		styles[`carouselContainer--${cellCount}`] || ''
	}`
	return (
		<section className={styles.container}>
			<div className={styles.heroImage}>
				<img src={props?.slice?.primary?.s_lo3_image_1?.url} alt='' />
			</div>
			<div className={styles.text}>
				<h1 className={styles.header}>
					{props?.slice?.primary?.s_lo3_title}
				</h1>
				<p
					className={styles.information}
					dangerouslySetInnerHTML={{
						__html: props?.slice?.primary?.s_lo2_information,
					}}
				></p>
				<h1 className={styles.subheader}>
					{props?.slice?.primary?.s_lo3_subtitle}
				</h1>
				<p
					className={styles.information}
					dangerouslySetInnerHTML={{
						__html: props?.slice?.primary?.s_lo3_subinformation,
					}}
				></p>
				<div className={carouselClass}>
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

export default sound_layout3
