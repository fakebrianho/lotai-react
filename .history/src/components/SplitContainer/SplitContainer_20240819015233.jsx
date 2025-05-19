function SplitContainer({ children, debug }) {
	return (
		<div
			className={`split-container ${debug ? 'border 2px solid red' : ''}`}
		>
			{children}
		</div>
	)
}

export default SplitContainer
