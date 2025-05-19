import styles from './project.module.css'
function project_image_layout7(props) {
	console.log(props)
	return (
		<section className={styles.container}>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image1.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image2.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image4.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image5.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image6.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image7.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image8.url} alt='' />
			</div>
			<div className={styles.gridItem}>
				<img src={props.slice.primary.image9.url} alt='' />
			</div>
			{props.slice.primary.media}
			<div
				className='soundcloud-container'
				dangerouslySetInnerHTML={{ __html: embedHtml }}
			/>
		</section>
	)
}

export default project_image_layout7
