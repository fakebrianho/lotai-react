import styles from './project_image_layout2.module.css'
function project_image_layout2(props) {
	return (
		<div className={styles.container}>
			<h1>{props.slice.primary.header}</h1>
			<div className={styles.layout}>
				<img
					className={styles.imageOne}
					src={props.slice.primary.image.url}
					alt=''
				/>
				<img
					className={styles.imageTwo}
					src={props.slice.primary.image2.url}
					alt=''
				/>
				<p className={styles.context}>{props.slice.primary.context}</p>
			</div>
		</div>
	)
}

export default project_image_layout2
