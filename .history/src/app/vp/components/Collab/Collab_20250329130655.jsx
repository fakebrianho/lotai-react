import styles from './Collab.module.css'
function Collab(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<p>{props.slices.data.primary.name}</p>
		</div>
	)
}

export default Collab
