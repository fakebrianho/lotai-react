import React from 'react'
import styles from './sound_layout2.module.css'

function sound_layout2(props) {
	console.log(props)
	let count
	if (props?.slice?.primary?.variation === '4Images') {
		count = 4
	} else if (props?.slice?.primary?.variation === '3Images') {
	} else if (props?.slice?.primary?.variation === '2Images') {
	}
	return (
		<section className={styles.container}>
			<div className={styles.left}></div>
			<div className={styles.right}></div>
		</section>
	)
}

export default sound_layout2
