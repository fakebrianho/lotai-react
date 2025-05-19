// import styles from './project_embed'
import styles from './project_embed.module.css'
function project_embed(props) {
	return (
		<div className={styles.container}>
			<iframe
				src={props.slice.primary.data.url}
				frameborder='0'
				allowFullScreen
			></iframe>
		</div>
	)
}

export default project_embed
