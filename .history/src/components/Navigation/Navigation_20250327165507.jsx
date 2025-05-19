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

export default function Navigation({ children, scroll, setScroll, lenis }) {
	const [bottomIsOpen, setBottomIsOpen] = useState(true)
	const [topIsOpen, setTopIsOpen] = useState(true)
	const pathname = usePathname()
	const imageRef = useRef(null)
	const textRef = useRef(null)
	const searchParams = useSearchParams()
	useEffect(() => {
		if (searchParams.get('drawersOpen') === 'true') {
			setBottomIsOpen(true)
			setTopIsOpen(true)
			setScroll(true)
		}
		// }, 300) // 300ms delay
	}, [searchParams])

	const handleBackClick = () => {
		toggleDrawer()
	}

	const toggleDrawer = () => {
		setBottomIsOpen((prevState) => !prevState)
		setTopIsOpen((prevState) => !prevState)
		setScroll((prevState) => !prevState)
	}

	useEffect(() => {
		toggleDrawer()
	}, [pathname])

	useEffect(() => {
		gsap.to(textRef.current, { opacity: 1, duration: 1 })
		gsap.to(imageRef.current, { opacity: 1, duration: 1 })
	}, [])

	return (
		<div
			style={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100vw',
				height: '100vh',
				// zIndex: '100',
			}}
		>
			<ArcaneCircleButton
				onClick={handleBackClick}
				bottomIsOpen={bottomIsOpen}
			/>
			<Drawer
				open={bottomIsOpen}
				onClose={toggleDrawer}
				direction='bottom'
				duration={1000}
				size={'50vh'}
			>
				<div className={styles.bottomDrawer}>
					{React.Children.map(children, (child) =>
						React.cloneElement(child, { toggleDrawer })
					)}
				</div>
			</Drawer>
			<Drawer
				open={topIsOpen}
				onClose={toggleDrawer}
				direction='top'
				duration={1000}
				size={'50vh'}
			>
				<div className={styles.topDrawer}>
					<img
						className={'w-[350px] opacity-0'}
						src='/Logo/logo.png'
						ref={imageRef}
					/>
					<div className='absolute flex w-[55%] justify-around bottom-0 ml-[40px] mb-[35px]'>
						<h1
							className={`${myFont.className} text-[rgb(40,44,37)] text-[5.5em] leading-[1.1] tracking-[35px] transform scale-x-[0.5] opacity-0`}
							ref={textRef}
						>
							LANE SHI
						</h1>
					</div>
				</div>
			</Drawer>
		</div>
	)
}
