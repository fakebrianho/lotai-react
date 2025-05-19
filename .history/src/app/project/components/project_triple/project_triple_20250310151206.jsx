import styles from './project_triple.module.css'
function project_triple(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<img src={props.slice.primary.image1.url} alt='' />
			<img src={props.slice.primary.image2.url} alt='' />
			<img src={props.slice.primary.image3.url} alt='' />
		</div>
	)
}

export default project_triple
