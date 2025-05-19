import styles from './project_header.module.css'
function project_header(props) {
	return (
		<div className={styles.container}>
			{<h1>{props.slice.primary.header}</h1>}
		</div>
	)
}

export default project_header
