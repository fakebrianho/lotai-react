import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import FullContainer from '@/components/FullContainer/FullContainer'
function Header(props) {
	return (
		<>
			<FullContainer centered={true} vertical={true}>
				<div
					className={`relative w-[92vw] md:w-[75vw] aspect-video ${styles.headerDiv} flex justify-center items-center`}
				>
					<Image
						src={props.img}
						alt='logo'
						fill
						objectFit='cover'
						className='rounded-[15px]'
					/>
				</div>
				<div className='w-[92vw] md:w-[75vw]'>
					<h1 className='text-white text-base md:text-2xl font-bold textFont text-center py-6 md:p-10'>
						{props.quote}
					</h1>
				</div>
			</FullContainer>
		</>
	)
}
export default Header
