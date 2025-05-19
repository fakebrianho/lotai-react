import styles from './EnterButton.module.css'
function EnterButton(props) {
	console.log(props)
	return (
		<div className={styles.container}>
			<a
				className={styles.btn}
				href={props.slice.primary.link.text}
				target='_blank'
				rel='noopener noreferrer'
			>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
				<span className={styles.btnSpan}>Enter</span>
			</a>
		</div>
	)
}

export default EnterButton
