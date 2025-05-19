'use client'
import styles from './page.module.css'
import { useEffect } from 'react'
import SliceZone from '@/components/SliceZone/SliceZone'
import { usePrismicQuery } from '@/hooks/usePrismicData'

export default function Shows(props) {
	const { data, isLoading } = usePrismicQuery({ type: 'shows' })
	if (isLoading) {
		return <div>Loading...</div>
	}
	console.log('data', data)
	useEffect(() => {
		// Load the Songkick script
		const script = document.createElement('script')
		script.src = 'https://widget.songkick.com/widget.js'
		script.async = true
		document.body.appendChild(script)

		// Clean up
		return () => {
			if (document.body.contains(script)) {
				document.body.removeChild(script)
			}
		}
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.glass}>
				<div className={styles.widgetContainer}>
					<a
						href='https://www.songkick.com/artists/9684569'
						className='songkick-widget'
						data-theme='dark'
						data-track-button='on'
						data-detect-style='true'
						data-font-color='#f9e6e6'
						data-background-color='#000000'
					>
						Otay:onii tour dates
					</a>
				</div>
				{/* <SliceZone /> */}
			</div>
		</div>
	)
}
