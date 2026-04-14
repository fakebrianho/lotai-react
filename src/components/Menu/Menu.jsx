// Menu.jsx
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import MenuItem from './MenuItem/MenuItem'

export default function Menu({ items }) {
	const textInnersRef = useRef([])
	const menuItemsRef = useRef([])

	const setTextInnerRef = (el, index) => {
		if (el) textInnersRef.current[index] = el
	}

	const setMenuItemRef = (el, index) => {
		if (el) menuItemsRef.current[index] = el
	}

	useEffect(() => {
		// Animate text items in on mount
		gsap.to(textInnersRef.current, {
			duration: 1.2,
			ease: 'Expo.easeOut',
			startAt: { y: '100%' },
			y: 0,
			delay: (idx) => idx * 0.06,
		})

		// Build one quickTo setter per item per property.
		// quickTo returns a lightweight function — calling it just updates
		// the destination of an already-running tween rather than creating a new one.
		const quickSetters = menuItemsRef.current
			.filter(Boolean)
			.map((item) => ({
				x: gsap.quickTo(item, 'x', { duration: 0.4, ease: 'power3.out' }),
				y: gsap.quickTo(item, 'y', { duration: 0.4, ease: 'power3.out' }),
				rotation: gsap.quickTo(item, 'rotation', { duration: 0.4, ease: 'power3.out' }),
			}))

		// Cache bounds so getBoundingClientRect isn't called every frame
		let bounds = menuItemsRef.current[0]?.getBoundingClientRect() ?? null
		const updateBounds = () => {
			bounds = menuItemsRef.current[0]?.getBoundingClientRect() ?? null
		}
		window.addEventListener('resize', updateBounds)

		// rAF throttle: store the latest mouse position and only apply it
		// on the next animation frame, discarding intermediate events.
		const mouse = { x: 0, y: 0 }
		let rafId = null

		const handleMouseMove = (e) => {
			mouse.x = e.clientX
			mouse.y = e.clientY

			if (rafId) return

			rafId = requestAnimationFrame(() => {
				rafId = null
				if (!bounds) return

				const dx = mouse.x - (bounds.left + bounds.width / 2)
				const dy = mouse.y - (bounds.top + bounds.height / 2)

				quickSetters.forEach((qs) => {
					qs.x(dx * 0.05)
					qs.y(dy * 0.05)
					qs.rotation(dx * 0.02)
				})
			})
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('resize', updateBounds)
			if (rafId) cancelAnimationFrame(rafId)
		}
	}, [])

	return (
		<nav className='menu'>
			{items.map((item, index) => (
				<MenuItem
					key={index}
					img={item.img}
					url={item.url}
					name={item.name}
					index={index}
					video={item.video}
					setTextInnerRef={(el) => setTextInnerRef(el, index)}
					setMenuItemRef={(el) => setMenuItemRef(el, index)}
				/>
			))}
		</nav>
	)
}
