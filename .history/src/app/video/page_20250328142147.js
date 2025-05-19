'use client'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import styles from './page.module.css'
import Menu from '@/components/Menu/Menu'
export default function Video() {
	const { data, isLoading } = usePrismicQuery({
		type: 'Video',
	})
	if (data) {
		console.log('videoData', data?.data?.slices)
	}
	// const menuItems = data?.data?.slices.map((slice, index) => ({
	// 	img: slice.primary.image.url, // Use a unique identifier if available
	// 	url: slice.primary.url, // Adjust based on your slice structure
	// 	name: slice.primary.title,
	// }))
	console.log(data)

	return (
		<section className={styles.container}>
			<div className={styles.innerContainer}>
				<Menu items={menuItems} />
			</div>
		</section>
	)
}
