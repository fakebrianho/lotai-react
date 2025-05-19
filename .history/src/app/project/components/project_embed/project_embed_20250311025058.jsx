// import styles from './project_embed'
import styles from './project_embed.module.css'
function project_embed(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			{/* <iframe src={props.slice.primary} frameborder="0"></iframe> */}
		</div>
	)
}

export default project_embed
