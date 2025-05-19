import styles from './project_paragraph.module.css'

function project_paragraph(props) {
	return (
		<div className={styles.container}>
			<p>{props.slice.primary.projectparagraph}</p>
		</div>
	)
}

export default project_paragraph
