import React from 'react'
import styles from './VideoEmbed.module.css'

function VideoEmbed(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<div
				dangerouslySetInnerHTML={{
					__html: props.slice.primary.data.html,
				}}
			/>
		</div>
	)
}

export default VideoEmbed
