import styles from './product.module.css'
function project_image_layout10(props) {
	return (
		<div className={styles.container}>
			<div
				className={`${styles.gridItem} ${styles.pos1}`}
				style={{
					backgroundImage: `url(${props.slice.primary.image1.url})`,
				}}
			></div>
		</div>
	)
}

export default project_image_layout10
