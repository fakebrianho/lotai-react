import React from 'react'
import styles from './project_image_layout3.module.css'

function project_image_layout3(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<img src={props.slice.primary.image1.url} alt='' />
			</div>
			<div className={styles.bottom}></div>
		</div>
	)
}

export default project_image_layout3
