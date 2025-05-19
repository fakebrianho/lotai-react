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
		// toggleDrawer()
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
		console.log('mouse enter', e)
		gsap.to(l1.current, {
			opacity: 1,
			duration: 0.5,
		})
		l2.current.classList.add('active')
	}
	function handleMouseLeave(e) {
		gsap.to(l1.current, {
			opacity: 0,
			duration: 0.5,
		})
		l2.current.classList.remove('active')
	}
	function handleMouseMove(e) {
		let b = c1.current.getBoundingClientRect()
		let x
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
						<div className={styles.card__layer2} ref={l2}></div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default NavCard
