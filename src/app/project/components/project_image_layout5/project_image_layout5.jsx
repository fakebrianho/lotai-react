import styles from './project_image_layout5.module.css'
function project_image_layout5(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<img src={props.slice.primary.image1.url} alt='' />
			<img src={props.slice.primary.image2.url} alt='' />
		</div>
	)
}

export default project_image_layout5
