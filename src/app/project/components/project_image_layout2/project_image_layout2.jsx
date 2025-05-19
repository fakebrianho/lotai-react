import styles from './project_image_layout2.module.css'
function project_image_layout2(props) {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<p>{props.slice.primary.context}</p>
			</div>
			<div className={styles.right}>
				<video src={props.slice.primary.video.url} alt='' controls />
			</div>
		</div>
	)
}

export default project_image_layout2
