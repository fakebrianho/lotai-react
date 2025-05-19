import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Fader({ scroll, lenis }) {
	const faderRef = useRef(null)
	useEffect(() => {
		if (lenis) {
			if (scroll) {
				gsap.to(faderRef.current, {
					opacity: 1,
					duration: 2.0,
					onComplete: () =>
						lenis.scrollTo(0, {
							duration: 0.5,
							onComplete: () => lenis.stop(),
						}), // Close the lenis.scrollTo call
				}) // Close the gsap.to call
			} else {
				gsap.to(faderRef.current, {
					opacity: 0,
					duration: 2.0,
					onComplete: () => {
						lenis.start()
						faderRef.current.style.zIndex = -90 // Correctly set zIndex using style
					},
				})
			}
		}
	}, [scroll])
	return (
		<div
			ref={faderRef}
			className='bg-black w-screen h-screen z-10 flex justify-center items-center opacity-100 fixed top-0 left-0'
		></div>
	)
}
