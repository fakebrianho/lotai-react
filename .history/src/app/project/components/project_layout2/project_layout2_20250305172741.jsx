import styles from './project_layout2.module.css'
function project_layout2(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<h1>{props.slice.primary.header}</h1>
		</div>
	)
}

export default project_layout2
