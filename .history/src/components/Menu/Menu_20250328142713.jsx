// Menu.jsx
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import MenuItem from './MenuItem/MenuItem'

export default function Menu({ items }) {
	console.log(items)
	// Store the refs for each menu item's 'textInner'
	// so we can animate them all at once in showMenuItems().
	const textInnersRef = useRef([])
	const menuItemsRef = useRef([]) // Add ref for menu items

	// Animatable properties object (if you need them
	// for more advanced interactions, store them in a React ref).
	const animatableProperties = useRef({
		tx: { previous: 0, current: 0, amt: 0.08 },
		ty: { previous: 0, current: 0, amt: 0.08 },
		rotation: { previous: 0, current: 0, amt: 0.04 },
		brightness: { previous: 1, current: 1, amt: 0.08 },
	})

	// This effect replaces the original showMenuItems() method.
	// It runs once (on mount) and animates all .textInner elements.
	useEffect(() => {
		// 1) "Show" items on mount
		gsap.to(textInnersRef.current, {
			duration: 1.2,
			ease: 'Expo.easeOut',
			startAt: { y: '100%' },
			y: 0,
			delay: (idx) => idx * 0.06,
		})

		// 2) Mouse event listener
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e
			const bounds = menuItemsRef.current[0]?.getBoundingClientRect()

			if (!bounds) return

			const centerX = bounds.left + bounds.width / 2
			const centerY = bounds.top + bounds.height / 2

			animatableProperties.current.tx.current = clientX - centerX
			animatableProperties.current.ty.current = clientY - centerY

			// Animate all menu items
			menuItemsRef.current.forEach((item) => {
				if (item) {
					gsap.to(item, {
						x: animatableProperties.current.tx.current * 0.05,
						y: animatableProperties.current.ty.current * 0.05,
						rotation:
							0.02 * animatableProperties.current.tx.current,
						duration: 0.2,
					})
				}
			})
		}

		window.addEventListener('mousemove', handleMouseMove)

		// Cleanup on unmount
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	// A helper callback to attach each child's <span> ref to our array.
	const setTextInnerRef = (el, index) => {
		if (el) {
			textInnersRef.current[index] = el
		}
	}

	const setMenuItemRef = (el, index) => {
		if (el) menuItemsRef.current[index] = el
	}

	return (
		<nav className='menu'>
			{Object.values(items).map((item, index) => (
				<MenuItem
					key={index}
					img={item.img}
					url={item.url}
					name={item.name}
					index={index} // Add index prop
					setTextInnerRef={(el) => setTextInnerRef(el, index)}
					setMenuItemRef={(el) => setMenuItemRef(el, index)} // Add new ref setter
				/>
			))}
		</nav>
	)
}
