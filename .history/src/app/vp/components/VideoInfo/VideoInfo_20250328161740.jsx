import styles from './VideoInfo.module.css'
function VideoInfo(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}></div>
			<div className={styles.textContainer}>
				<div className={styles.bioSection}>
					{props.slice.primary.context}
				</div>
			</div>
		</div>
	)
}

export default VideoInfo
