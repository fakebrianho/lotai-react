import React from 'react'
import styles from './sound_layout2.module.css'

function sound_layout2(props) {
	console.log(props)
	let count
	if (props.slice.primary.variation === '')
		return (
			<section className={styles.container}>
				<div className={styles.left}></div>
				<div className={styles.right}></div>
			</section>
		)
}

export default sound_layout2
