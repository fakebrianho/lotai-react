import styles from './VideoGallery.module.css'
function VideoGallery({ children }) {
	console.log(children)
	return (
		<div className={styles.container}>
			<div>{children[0]}</div>
		</div>
	)
}

export default VideoGallery
