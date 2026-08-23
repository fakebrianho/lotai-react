'use client'
import { useEffect, useState, useRef } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import styles from './navigation.module.css'
import ArcaneCircleButton from '../ArcaneButton/ArcaneButton'
import React from 'react'
import { usePathname } from 'next/navigation'
import localFont from 'next/font/local'
import gsap from 'gsap'
const myFont = localFont({
	src: '../../../public/Fonts/Rubik_Beastly/RubikBeastly-Regular.ttf',
})
import { useSearchParams } from 'next/navigation'

export default function Navigation({
	children,
	setScroll,
	isOpen = false,
}) {
	const [bottomIsOpen, setBottomIsOpen] = useState(isOpen)
	const [topIsOpen, setTopIsOpen] = useState(isOpen)
	const pathname = usePathname()
	const imageRef = useRef(null)
	const textRef = useRef(null)
	const searchParams = useSearchParams()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mq = window.matchMedia('(max-width: 768px)')
		const update = () => setIsMobile(mq.matches)
		update()
		mq.addEventListener('change', update)
		return () => mq.removeEventListener('change', update)
	}, [])

	useEffect(() => {
		if (searchParams.get('drawersOpen') === 'true') {
			setBottomIsOpen(true)
			setTopIsOpen(true)
		}
	}, [searchParams])

	const toggleDrawer = () => {
		setBottomIsOpen((prevState) => !prevState)
		setTopIsOpen((prevState) => !prevState)
	}

	// On first mount only, open the drawers
	const isMounted = useRef(false)
	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true
			setBottomIsOpen(true)
			setTopIsOpen(true)
		}
	}, [pathname])

	// Lock body scroll while nav drawers are open; trigger fader fade when drawers close
	useEffect(() => {
		document.body.style.overflow = bottomIsOpen ? 'hidden' : ''
		if (!bottomIsOpen) {
			setScroll(false)
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [bottomIsOpen])

	useEffect(() => {
		if (textRef.current) gsap.to(textRef.current, { opacity: 1, duration: 1 })
		if (imageRef.current) gsap.to(imageRef.current, { opacity: 1, duration: 1 })
	}, [isMobile])

	const cards = React.Children.map(children, (child) =>
		React.cloneElement(child, { toggleDrawer })
	)

	return (
		<div
			style={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100vw',
				height: '100vh',
			}}
		>
			<ArcaneCircleButton
				onClick={toggleDrawer}
				bottomIsOpen={bottomIsOpen}
			/>
			<Drawer
				open={bottomIsOpen}
				onClose={toggleDrawer}
				direction='bottom'
				duration={1000}
				size={isMobile ? '50dvh' : '50vh'}
			>
				<div className={styles.bottomDrawer}>
					{isMobile ? cards.slice(3) : cards}
				</div>
			</Drawer>
			<Drawer
				open={topIsOpen}
				onClose={toggleDrawer}
				direction='top'
				duration={1000}
				size={isMobile ? '50dvh' : '50vh'}
			>
				<div className={styles.topDrawer}>
					{isMobile ? (
						<div className={styles.topDrawerCards}>
							{cards.slice(0, 3)}
						</div>
					) : (
						<div className={styles.heroLockup}>
							<img
								className={`${styles.heroLogo} opacity-0`}
								src='/Logo/logo.png'
								ref={imageRef}
							/>
							<div className={styles.heroTextWrap}>
								<h1
									className={`${myFont.className} ${styles.heroText} opacity-0`}
									ref={textRef}
								>
									LANE SHI
								</h1>
							</div>
						</div>
					)}
				</div>
			</Drawer>
		</div>
	)
}
