function SplitContainer({ children, debug, vertical }) {
	return (
		<div
			className={`split-container ${
				debug ? 'border 2px solid red' : ''
			} flex ${vertical ? 'flex-row' : 'flex-col'}`}
		>
			{children}
		</div>
	)
}

export default SplitContainer
