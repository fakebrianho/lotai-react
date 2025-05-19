import React from 'react'
import styles from './sound_layout2.module.css'

function sound_layout2(props) {
	console.log(props)
	let count
	let images = []
	if (props?.slice?.primary?.images) {
		images = Object.values(props.slice.primary.images)
	}
	console.log(images)
	return (
		<section className={styles.container}>
			<div className={styles.left}>{}</div>
			<div className={styles.right}></div>
		</section>
	)
}

export default sound_layout2
