import styles from './project_video.module.css'
function project_video(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<h1>{props.slice.primary.header}</h1>
		</div>
	)
}

export default project_video
