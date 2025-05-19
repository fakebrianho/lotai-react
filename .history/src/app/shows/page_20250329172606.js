'use client'
import styles from './page.module.css'
import { useEffect, useRef } from 'react'
// import SliceZone from '@/components/SliceZone/SliceZone'
import { usePrismicQuery } from '@/hooks/usePrismicData'

export default function Shows() {
	const songkickLoaded = useRef(false)
	const containerRef = useRef(null)
	const { data, isLoading } = usePrismicQuery({
		type: 'contact',
	})
	useEffect(() => {
		// Check if Songkick is already loaded to prevent duplicate script loading
		if (songkickLoaded.current) return

		const loadSongkick = () => {
			// Only proceed if window exists (browser environment)
			if (typeof window !== 'undefined') {
				// Remove any existing Songkick scripts first to avoid conflicts
				const existingScripts = document.querySelectorAll(
					'script[src*="songkick.com"]'
				)
				existingScripts.forEach((script) => script.remove())

				// Create and append the script
				const script = document.createElement('script')
				script.src = 'https://widget.songkick.com/widget.js'
				script.async = true
				script.id = 'songkick-script'

				script.onload = () => {
					console.log('Songkick script loaded successfully')
					songkickLoaded.current = true
				}

				script.onerror = (error) => {
					console.error('Error loading Songkick script:', error)
				}

				document.body.appendChild(script)
			}
		}

		// Delay loading the script slightly to ensure the DOM is fully ready
		const timer = setTimeout(loadSongkick, 100)

		return () => {
			clearTimeout(timer)
			// Cleanup if component unmounts
			const script = document.getElementById('songkick-script')
			if (script) {
				script.remove()
			}
		}
	}, [])
	if (isLoading) {
		return <div>Loading...</div>
	}
	return (
		<div className={styles.container} ref={containerRef}>
			<div className={styles.glass}>
				<div className={styles.widgetContainer} data-lenis-prevent>
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
