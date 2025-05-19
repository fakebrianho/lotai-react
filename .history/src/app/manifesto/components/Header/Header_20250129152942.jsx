import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import FullContainer from '@/components/FullContainer/FullContainer'
function Header(props) {
	return (
		<>
			<FullContainer centered={true} vertical={true}>
				<div
					className={`relative w-[75%] min-h-[50vh] ${styles.headerDiv} flex justify-center items-center`}
				>
					<Image
						src='/banner.png'
						alt='logo'
						fill
						objectFit='cover'
						className='rounded-[15px]'
					/>
				</div>
				<div className='w-[75%]'>
					<h1 className='text-white text-2xl font-bold textFont text-center p-10'>
						"My Task is to solve a puzzle with another puzzle that
						can't be seen, be touched, but feel."
					</h1>
				</div>
			</FullContainer>
		</>
	)
}
export default Header
