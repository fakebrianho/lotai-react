import styles from './project_image.module.css'

function project_image(props) {
	return (
		<div className={styles.container}>
			<img src={props.slice.primary.image.url} alt='' />
		</div>
	)
}

export default project_image
