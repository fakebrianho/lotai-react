import styles from './project_image_layout4.module.css'
import EnterButton from '../EnterButton/EnterButton'
function project_image_layout4(props) {
	return (
		<div>
			<div className={styles.container}>
				<img src={props.slice.primary.image1.url} alt='' />
				<img src={props.slice.primary.image2.url} alt='' />
			</div>
			<EnterButton />
		</div>
	)
}

export default project_image_layout4
