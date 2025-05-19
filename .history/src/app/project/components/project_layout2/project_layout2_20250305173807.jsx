import styles from './project_layout2.module.css'
function project_layout2(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<h1>{props.slice.primary.header}</h1>
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
			<p>{props.slice.primary.context}</p>
		</div>
	)
}

export default project_layout2
