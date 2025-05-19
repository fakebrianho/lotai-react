import React from 'react'
import styles from './VideoSlider.module.css'

function VideoSlider(props) {
	return (
		<div className={styles.container}>
			<img src={props.data.primary.image.url} alt='' />
			<p>{props.data.primary.caption}</p>
		</div>
	)
}

export default ProjectSlider
