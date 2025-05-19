import styles from './Collab.module.css'
function Collab(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<img src={props.data.primary.name} alt='' />
		</div>
	)
}

export default Collab
