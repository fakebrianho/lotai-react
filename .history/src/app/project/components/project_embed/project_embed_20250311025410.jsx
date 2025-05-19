// import styles from './project_embed'
import styles from './project_embed.module.css'
function project_embed(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			{/* <iframe
				src={props.slice.primary.data.embed_url}
				frameborder='0'
				allowFullScreen
			></iframe> */}
			{/* {props.slice.primary.data.html} */}
			<div
				dangerouslySetInnerHTML={{
					__html: props.slice.primary.data.html,
				}}
			/>
		</div>
	)
}

export default project_embed
