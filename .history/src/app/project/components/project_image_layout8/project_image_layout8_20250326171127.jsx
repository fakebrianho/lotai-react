import styles from './project.module.css'
function project_image_layout8(props) {
	return (
		<div className={styles.container}>
			<img src={props.slices.primary.image1.url} alt='' />
			<img src={props.slices.primary.image2.url} alt='' />
		</div>
	)
}

export default project_image_layout8
