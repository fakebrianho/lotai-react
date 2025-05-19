import styles from './Collab.module.css'
function Collab(props) {
	console.log(props)
	return <p className={styles.collab}>{props.data.primary.name}</p>
}

export default Collab
