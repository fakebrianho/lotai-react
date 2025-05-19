'use client'
import { useEffect, useState } from 'react'
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
		gsap.to(l1, {
			opacity: 1,
			duration: 0.5,
		})
		layer.classList.add('active')
	}

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
				onMouseEnter={(e) => handleMouseEnter(e)}
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
