import styles from './project.module.css'
function project_image_layout7(props) {
	console.log(props)
	return (
		<section className={styles.container}>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image1.url} alt='' />
			</div>
		</section>
	)
}

export default project_image_layout7
