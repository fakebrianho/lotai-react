import React from 'react'
import styles from './project_slider.module.css'

function ProjectSlider(props) {
	return (
		<div className={styles.container}>
			<img src={props.data.primary.image.url} alt='' />
			<p>{props.data.primary.caption}</p>
		</div>
	)
}

export default ProjectSlider
