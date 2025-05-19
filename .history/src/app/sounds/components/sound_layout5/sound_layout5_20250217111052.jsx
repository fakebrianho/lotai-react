import React from 'react'
import styles from './sound_layout5.module.css'

function sound_layout5(props) {
	console.log(props)
	return (
		<section className={styles.container}>
			<div className={styles.right}>
				<img src={props?.slice?.primary?.s_lo5_image_1.url} alt='' />
			</div>
            <div className={styles.right}>
                <p dangerouslySetInnerHTML={__html:props?.slice?.primary?.}></p>
            </div>
		</section>
	)
}

export default sound_layout5
