'use client'
import { useEffect, useState } from 'react'
import styles from './NavCard.module.css'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import gsap from 'gsap'

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

	const handleClick = () => {
		router.push(url)
	}

	useEffect(() => {
		if (pageLoaded) {
			toggleDrawer()
		}
	}, [pageLoaded, toggleDrawer])

	useEffect(() => {
		const handleRouteChangeComplete = () => {
			setPageLoaded(true)
		}

		if (typeof window !== 'undefined' && router && router.events) {
			router.events.on('routeChangeComplete', handleRouteChangeComplete)
		}

		return () => {
			if (typeof window !== 'undefined' && router && router.events) {
				router.events.off(
					'routeChangeComplete',
					handleRouteChangeComplete
				)
			}
		}
	}, [router])

	return (
		<motion.div
			variants={pageTransition}
			animate='in'
			initial='out'
			exit='out'
			className='motionContainer'
		>
			<div
				className='z-10 w-[172.96px] h-[233.5px] box-border relative'
				data-url='manifesto'
			>
				<div
					className={`${styles.card__wrapper} inset-0 absolute`}
					onClick={handleClick}
				>
					<div className={styles.card__3d}>
						<div className={styles.card__image}>
							<img src={image} />
						</div>
						<div className={styles.card__layer1}></div>
						<div className={styles.card__layer2}></div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default NavCard
