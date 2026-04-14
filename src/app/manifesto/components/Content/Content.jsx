import React from 'react'
import FullContainer from '@/components/FullContainer/FullContainer'

function Content(props) {
	console.log('propsl', props)
	return (
		<FullContainer vertical={true}>
			<div className='w-[75%] mx-auto'>
				{props.data?.map((paragraph, i) => {
					return (
						<div key={i}>
							<p className='p-4 textFont text sm'>
								{paragraph.primary.biographyblock}
							</p>
						</div>
					)
				})}
			</div>
		</FullContainer>
	)
}

export default Content
