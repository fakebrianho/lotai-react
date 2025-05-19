import React from 'react'
import styles from './sound_layout3.module.css'

function sound_layout3(props) {
	console.log(props)
	return (
		<section className={styles.container}>
			<div className={styles.heroImage}>
				<img src={props?.slice?.primary?.s_lo3_image_1?.url} alt='' />
			</div>
			<div className={styles.text}>
				<h1 className={styles.header}>
					{props?.slice?.primary?.s_lo3_title}
				</h1>
				<p
					className={styles.information}
					dangerouslySetInnerHTML={{
						__html: props?.slice?.primary?.s_lo3_information,
					}}
				></p>
			</div>
		</section>
	)
}

export default sound_layout3
