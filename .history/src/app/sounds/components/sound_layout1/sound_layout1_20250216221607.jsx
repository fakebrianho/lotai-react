import React from 'react'
import styles from './sound_layout1.module.css'
function sound_layout1(props) {
	console.log('props', props)
	return (
		<div className={styles.container}>
			<div className={styles.section1}>
				<h1 className={styles.title}>Default</h1>
				<img
					className={styles.image1}
					src={props?.slice?.primary}
					alt=''
				/>
			</div>
		</div>
	)
}

export default sound_layout1
