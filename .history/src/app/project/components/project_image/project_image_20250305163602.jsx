import styles from './project_image.module.css'

function project_image(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<img src={props.slice.primary.image.rl} alt='' />
		</div>
	)
}

export default project_image
