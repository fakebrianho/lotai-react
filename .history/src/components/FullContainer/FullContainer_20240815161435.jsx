import React from 'react'

function FullContainer({ children, debug, centered, vertical }) {
	return (
		<div
			className={`fullContainer ${
				debug ? 'border 2px solid red' : ''
			} w-screen h-screen ${
				centered ? 'flex items-center justify-center' : ''
			} ${vertical ? 'flex flex-col' : ''}`}
		>
			{children}
		</div>
	)
}

export default FullContainer
