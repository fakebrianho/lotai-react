import React from 'react'

function FullContainer({ children, debug, centered }) {
	return (
		<div
			className={`fullContainer ${
				debug ? 'border 2px solid red' : ''
			} w-screen h-screen ${
				centered ? 'flex items-center justify-center' : ''
			}`}
		>
			{children}
		</div>
	)
}

export default FullContainer
