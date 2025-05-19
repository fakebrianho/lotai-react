import styles from './project_header_info.module.css'
function project_header_info(props) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>{props.slice.primary.title}</h1>
			</div>
			<span className={styles.divider}></span>
			<div className={styles.right}>
				<span className={styles.subtitle}>
					{props.slice.primary.subtitle}
				</span>
			</div>
		</div>
	)
}

export default project_header_info
