import styles from './project_image_layout4.module.css'
import EnterButton from '../EnterButton/EnterButton'
function project_image_layout4(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<div className={styles.images}>
				<img src={props.slice.primary.image1.url} alt='' />
				<img src={props.slice.primary.image2.url} alt='' />
			</div>
			{/* <EnterButton url={props.slice.primary.image1.url} /> */}
		</div>
	)
}

export default project_image_layout4
