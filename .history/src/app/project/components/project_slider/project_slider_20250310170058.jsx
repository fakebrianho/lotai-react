import React from 'react'
import styles from './project_slider.module.css'

function ProjectSlider(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<img src={props.data.slice.primary.image.url} alt='' />
		</div>
	)
}

export default ProjectSlider
