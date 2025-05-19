'use client'
import { useEffect, useState, useRef } from 'react'
import styles from './NavCard.module.css'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { usePathname, useSearchParams } from 'next/navigation'

const pageTransition = {
	out: {
		opacity: 0,
		transition: {
			duration: 1.75,
		},
	},
	in: {
		opacity: 1,
		transition: {
			duration: 2.0,
			delay: 1,
		},
	},
}

function NavCard({ image, url, toggleDrawer }) {
	const router = useRouter()
	const [pageLoaded, setPageLoaded] = useState(false)
	const pathname = usePathname()
	const l1 = useRef(null)
	const l2 = useRef(null)
	const c1 = useRef(null)

	const handleClick = () => {
		console.log(pathname)
		console.log(url)
		if (pathname === url) {
			toggleDrawer()
		} else {
			router.push(url)
		}

	useEffect(() => {
		const handleRouteChange = () => {
			setPageLoaded(false)
		}

		const handleRouteChangeComplete = () => {
			setPageLoaded(true)
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('beforeunload', handleRouteChange)
			window.addEventListener('load', handleRouteChangeComplete)
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('beforeunload', handleRouteChange)
				window.removeEventListener('load', handleRouteChangeComplete)
			}
		}
	}, [])

	function handleMouseEnter(e) {
		gsap.to(l1.current, {
			opacity: 1,
			duration: 0.5,
		})
		l2.current.className = `${styles.card__layer2} ${styles.active}`
	}
	function handleMouseLeave(e) {
		gsap.to(l1.current, {
			opacity: 0,
			duration: 0.5,
		})
		l2.current.className = styles.card__layer2
		let rX = 0
		let rY = 0
		c1.current.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`
		l2.current.className = styles.card__layer2
	}
	function handleMouseMove(e) {
		let b = c1.current.getBoundingClientRect()
		let w = c1.current.clientWidth
		let h = c1.current.clientHeight
		let X = (e.clientX - b.left) / w
		let Y = (e.clientY - b.top) / h
		const newBackground = `radial-gradient(
			farthest-corner circle at ${100 * X}% ${100 * Y}%,
			rgba(255, 255, 255, 0.8) 10%,
			rgba(255, 255, 255, 0.65) 20%,
			rgba(255, 255, 255, 0) 90%
		)`
		l1.current.style.background = newBackground
		let bgX = 40 + 20 * X
		let bgY = 40 + 20 * Y
		document.documentElement.style.setProperty('--bg-x', bgX + '%')
		document.documentElement.style.setProperty('--bg-y', bgY + '%')
		let rX = -(X - 0.5) * 26
		let rY = (Y - 0.5) * 26
		c1.current.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`
	}

	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
			className='motionContainer'
			onMouseMove={(e) => handleMouseMove(e)}
		>
			<div
				className='z-10 w-[172.96px] h-[233.5px] box-border relative'
				data-url='manifesto'
				onMouseEnter={(e) => handleMouseEnter(e)}
				onMouseLeave={(e) => handleMouseLeave(e)}
			>
				<div
					className={`${styles.card__wrapper} inset-0 absolute`}
					onClick={handleClick}
				>
					<div className={styles.card__3d} ref={c1}>
						<div className={styles.card__image}>
							<img src={image} />
						</div>
						<div className={styles.card__layer1} ref={l1}></div>
						<div
							className={`${styles.card__layer2}`}
							ref={l2}
						></div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default NavCard
