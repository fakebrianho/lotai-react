import React from 'react'
import styles from './sound_layout4.module.css'

function sound_layout4(props) {
	console.log(props)
	return (
		<section className={styles.container}>
			<div className={styles.left}>
				<img src={props?.slice?.primary?.s_lo4_image_1.url} alt='' />
			</div>
			<div className={styles.right}>
				<p
					dangerouslySetInnerHTML={{
						_html: props?.slice?.primary?.s_lo4_information,
					}}
				></p>
			</div>
		</section>
	)
}

export default sound_layout4
