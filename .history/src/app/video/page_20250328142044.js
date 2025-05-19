'use client'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import styles from './page.module.css'
import Menu from '@/components/Menu/Menu'
export default function Contact() {
	const { data, isLoading } = usePrismicQuery({
		type: 'video',
	})
	if (data) {
		console.log('videoData', data?.data?.slices)
	}
	const menuItems = data?.data?.slices.map((slice, index) => ({
		img: slice.primary.image.url, // Use a unique identifier if available
		url: slice.primary.url, // Adjust based on your slice structure
		name: slice.primary.title,
	}))

	return (
		<section className={styles.container}>
			<div className={styles.innerContainer}>
				<Menu items={menuItems=} />
			</div>
		</section>
	)
}
