import styles from './project_header_info.module.css'
function project_header_info(props) {
	console.log('props', props)
	return (
		<div className={styles.container}>
			<h1>{props.slice.primary.title}</h1>
			<p>{props.slice.primary.subtitle}</p>
		</div>
	)
}

export default project_header_info
