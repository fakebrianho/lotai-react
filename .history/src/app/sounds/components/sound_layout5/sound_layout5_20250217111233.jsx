import React from 'react'
import styles from './sound_layout5.module.css'

function sound_layout5(props) {
	console.log(props)
	return (
		<section className={styles.container}>
			<div className={styles.left}>
				<p
					dangerouslySetInnerHTML={{
						__html: props?.slice?.primary?.s_lo5_information,
					}}
				></p>
			</div>
			<div className={styles.right}>
				<img src={props?.slice?.primary?.s_lo5_image_1.url} alt='' />
			</div>
		</section>
	)
}

export default sound_layout5
