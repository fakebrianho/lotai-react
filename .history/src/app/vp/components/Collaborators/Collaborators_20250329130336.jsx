import styles from './Collaborators.module.css'

function Collaborators({ children }) {
	return (
		<div className={styles.container}>
			{children.map((child, i) => {
				return child
			})}
		</div>
	)
}

export default Collaborators
