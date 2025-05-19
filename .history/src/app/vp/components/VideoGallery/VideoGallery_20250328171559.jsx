import styles from './VideoGallery.module.css'
function VideoGallery({ children }) {
	console.log(children)
	return (
		<div className={styles.container}>
			{children.map((child, i) => {
				return (
					<div>
						<img src={child} alt='' />
					</div>
				)
			})}
		</div>
	)
}

export default VideoGallery
