'use client'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import styles from './page.module.css'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import SliceZone from '@/components/SliceZone/SliceZone'

export default function Contact() {
	const { data, isLoading } = usePrismicQuery({
		type: 'mixedmedia',
	})
	if (data) {
		console.log(data?.data?.slices)
	}

	if (isLoading) {
		return <div>Loading...</div>
	}
	const menuItems = data?.data?.slices.map((slice, index) => ({
		img: slice.primary.MixedMediaImage1.url, // Use a unique identifier if available
		url: slice.primary.MixedMediaURL, // Adjust based on your slice structure
		name: slice.primary.MixedMediaTitle,
	}))

	return (
		<section className={styles.container}>
			<div className={styles.innerContainer}>
				<Menu items={menuItems} />
				{/* <a
					className={styles.menu__item}
					data-img='mm/1/nippleEye.jpg'
					data-url='project1'
				>
					<span className={styles.menu__itemText}>
						<span
							className={styles.menu__item__textInner}
							id='nippleEye'
						>
							Nipple
							<i>Eye</i>
						</span>
					</span>
				</a> */}
			</div>
		</section>
	)
}
