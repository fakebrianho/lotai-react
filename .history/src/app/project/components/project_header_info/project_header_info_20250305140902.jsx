import styles from './project_header_info.module.css'
function project_header_info(props) {
	console.log('props', props)
	return (
		<div className={styles.container}>
			<h1>{props.slice.primary.title}</h1>
			<h1>{props.slice.primary.subtitle}</h1>
		</div>
	)
}

export default project_header_info
