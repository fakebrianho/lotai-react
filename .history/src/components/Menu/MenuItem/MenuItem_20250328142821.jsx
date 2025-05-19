// MenuItem.jsx
import React, { useRef, useEffect, useState } from 'react'
import styles from './MenuItem.module.css'
import gsap from 'gsap'
import Link from 'next/link'

export default function MenuItem({
	img,
	url,
	name,
	index,
	setTextInnerRef,
	setMenuItemRef,
}) {
	const itemRef = useRef(null)
	const imageRef = useRef(null)
	const numberRef = useRef(null)
	const [hovered, setHovered] = useState(false)
	console.log('url', url)
	useEffect(() => {
		if (itemRef.current) {
			setMenuItemRef(itemRef.current, index)
		}
	}, [])

	const handleMouseEnter = () => {
		setHovered(true)
		// Reveal number
		gsap.to(numberRef.current, {
			y: 0,
			duration: 0.3,
			ease: 'power2.out',
		})

		// Show and animate image
		gsap.to(imageRef.current, {
			opacity: 1,
			scale: 1,
			duration: 0.4,
			ease: 'power2.out',
		})
	}

	const handleMouseLeave = () => {
		setHovered(false)
		// Hide number
		gsap.to(numberRef.current, {
			y: '100%',
			duration: 0.3,
			ease: 'power2.in',
		})

		// Hide image
		gsap.to(imageRef.current, {
			opacity: 0,
			scale: 0.8,
			duration: 0.4,
			ease: 'power2.in',
		})
	}

	return (
		<Link
			href={`/${url}`}
			ref={itemRef}
			className={`${styles.menu__item} ${hovered ? styles.hovered : ''}`}
			data-img={img}
			data-url={url}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<span className={styles.menu__itemText}>
				<span
					className={styles.menu__itemInner}
					ref={(el) => setTextInnerRef(el)}
				>
					{name}
				</span>
			</span>
			<span className={styles.menu__itemNumber} ref={numberRef}>
				{(index + 1).toString().padStart(2, '0')}
			</span>
			<div
				className={styles.menu__itemImage}
				ref={imageRef}
				style={{
					backgroundImage: `url(${img})`,
					opacity: 0,
					transform: 'scale(0.8)',
				}}
			/>
		</Link>
	)
}
