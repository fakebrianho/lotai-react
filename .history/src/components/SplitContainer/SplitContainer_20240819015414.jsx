function SplitContainer({ children, debug, vertical }) {
	return (
		<div
			className={`split-container ${
				debug ? 'border 2px solid red' : ''
			} flex ${
				vertical ? 'flex-col' : 'flex-row'
			} p-[5rem] w-screen min-h-screen`}
		>
			{children}
		</div>
	)
}

export default SplitContainer
