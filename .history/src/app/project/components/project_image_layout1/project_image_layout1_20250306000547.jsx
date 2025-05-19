import styles from './project_image_layout1.module.css'
function project_image_layout1(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<video src={props.slice.primary.video.url} alt='' controls />
			</div>
			<div className={styles.right}>{props.slice.primary.context}</div>
		</div>
	)
}

export default project_image_layout1
