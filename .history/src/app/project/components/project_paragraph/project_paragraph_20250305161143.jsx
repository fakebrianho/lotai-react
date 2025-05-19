import styles from './project_paragraph.module.css'

function project_paragraph(props) {
	return (
		<div className={styles.container}>
			<p>{props.slice.primary.text}</p>
		</div>
	)
}

export default project_paragraph
