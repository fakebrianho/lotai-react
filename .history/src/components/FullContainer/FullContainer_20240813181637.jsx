import React from 'react'

function FullContainer({ children, debug }) {
	return (
		<div
			className={`fullContainer ${
				debug ? 'border 2px solid red' : ''
			} w-full h-full`}
		>
			{children}
		</div>
	)
}

export default FullContainer
