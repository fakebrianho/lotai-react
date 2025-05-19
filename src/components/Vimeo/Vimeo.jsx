import styles from './Vimeo.module.css'
function Vimeo(props) {
	return (
		<section className={styles.container}>
			<iframe
				src='https://player.vimeo.com/video/217960427?transparent=0'
				width='100vw'
				height='75vh'
				frameborder=' 0'
				allowfullscreen
			></iframe>
		</section>
	)
}

export default Vimeo
