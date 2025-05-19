import React from 'react'

function FullContainer({ children, debug, centered, vertical, mw }) {
	return (
		<div
			className={`fullContainer ${
				debug ? 'border 2px solid red' : ''
			} w-screen h-max ${
				centered ? 'flex items-center justify-center' : ''
			} ${vertical ? 'flex flex-col' : ''} ${
				mw ? `max-w-[${mw}]` : ''
			} p-[5rem]`}
		>
			{children}
		</div>
	)
}

export default FullContainer
