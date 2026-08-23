import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Fader({ scroll }) {
	const faderRef = useRef(null)

	useEffect(() => {
		if (!scroll) {
			// Wait for drawer close animation (1000ms) then fade out the overlay
			gsap.to(faderRef.current, {
				opacity: 0,
				duration: 2.0,
				delay: 1.0,
				onComplete: () => {
					if (faderRef.current) {
						faderRef.current.style.zIndex = -90
					}
				},
			})
		}
	}, [scroll])

	return (
		<div
			ref={faderRef}
			className='bg-black w-screen h-screen flex justify-center items-center opacity-100 fixed top-0 left-0'
			style={{ zIndex: 10 }}
		></div>
	)
}
