import styles from './project_image_layout7.module.css'
function project_image_layout6(props) {
	return (
		<div className={styles.container}>
			<img src={props.slice.primary.image1.url} alt='' />
			<img src={props.slice.primary.image2.url} alt='' />
			<img src={props.slice.primary.image3.url} alt='' />
		</div>
	)
}

export default project_image_layout6
