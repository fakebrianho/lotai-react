import styles from './product.module.css'
function project_image_layout10(props) {
	return (
		<div className={styles.container}>
			<div className={`${styles.gridItem} ${styles.pos1}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image1.url})`,
					}}
				></div>
			</div>
			<div className={`${styles.gridItem} ${styles.pos2}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image2.url})`,
					}}
				></div>
			</div>
			<div className={`${styles.gridItem} ${styles.pos3}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image3.url})`,
					}}
				></div>
			</div>
			<div className={`${styles.gridItem} ${styles.pos4}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image4.url})`,
					}}
				></div>
			</div>
			<div className={`${styles.gridItem} ${styles.pos5}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image5.url})`,
					}}
				></div>
			</div>
			<div className={`${styles.gridItem} ${styles.pos6}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image6.url})`,
					}}
				></div>
			</div>
			<div className={`${styles.gridItem} ${styles.pos7}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image7.url})`,
					}}
				></div>
			</div>
			<div className={`${styles.gridItem} ${styles.pos8}`}>
				<div
					className={`${styles.gridImage}`}
					style={{
						backgroundImage: `url(${props.slice.primary.image8.url})`,
					}}
				></div>
			</div>
		</div>
	)
}

export default project_image_layout10
