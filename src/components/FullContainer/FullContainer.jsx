import React from 'react'

function FullContainer({ children, debug, centered, vertical, mw }) {
	return (
		<div
			className={`fullContainer ${
				debug ? 'border 2px solid red' : ''
			} w-full md:min-h-screen ${
				centered ? 'flex items-center justify-center' : ''
			} ${vertical ? 'flex flex-col' : ''} ${
				mw ? `max-w-[${mw}]` : ''
			} px-4 py-8 md:p-[5rem]`}
		>
			{children}
		</div>
	)
}

export default FullContainer
