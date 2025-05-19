import styles from './VideoGallery.module.css'
function VideoGallery({ children }) {
	return (
		<div className={styles.container}>
			{children.map((child, i) => {
				return child
			})}
		</div>
	)
}

export default VideoGallery
