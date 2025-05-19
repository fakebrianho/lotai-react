import styles from './VideoInfo.module.css'
function VideoInfo(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img src={props.slice.primary.image.url} alt='' />
			</div>
			<div className={styles.textContainer}>
				<h2 className={`styles.title}>{props.slice.primary.title}</h2>
				<p className={styles.role}>{props.slice.primary.subtitle}</p>
				<div className={styles.bioSection}>
					{props.slice.primary.context}
				</div>
			</div>
		</div>
	)
}

export default VideoInfo
