import styles from './project_header.module.css'
function project_header(props) {
	console.log(props)
	return <div className={styles.container}>{props.slice.primary.header}</div>
}

export default project_header
