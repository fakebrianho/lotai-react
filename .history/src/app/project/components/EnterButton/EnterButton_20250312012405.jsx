import styles from './EnterButton.module.css'
function EnterButton(props) {
	console.log(props)
	return (
		<div
			className={styles.btn}
			onClick={() => window.open(props.slice.primary.link)}
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
		</div>
	)
}

export default EnterButton
