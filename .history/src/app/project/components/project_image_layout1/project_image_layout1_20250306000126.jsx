import styles from './project_image_layout1.module.css'
function project_image_layout1(props) {
	return (
		<div className={styles.container}>
			<div className={styles.left}>{props.slices.primary.context}</div>
			<div className={styles.right}></div>
		</div>
	)
}

export default project_image_layout1
