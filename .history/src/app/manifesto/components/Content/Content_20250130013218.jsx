import React from 'react'
import FullContainer from '@/components/FullContainer/FullContainer'

function Content(props) {
	console.log('propsl', props)
	return (
		<FullContainer vertical={true}>
			<div className='w-[75%] mx-auto'>
				{props.data.map((paragraph) => {
					return (
						<div>
							<p>{paragraph.primary.biographyblock}</p>
						</div>
					)
				})}
				<p className='p-4 textFont text-sm'>
					Otay:onii (Lane Shi) is a multifaceted artist originally
					from Haining, China, currently based in NY. 5 Her artistic
					practice spans across music, sound design, installation art,
					and film composition. She is the lead vocalist and
					keyboardist of the punk spit band Elizabeth Colour Wheel
					(US).
				</p>
				<p className='p-4 textFont text-sm'>
					Otay’s work has received recognition and accolades,
					including the bronze prize for "Best Female Vocalist" from
					Global Music Awards, and "Best Sound" from the Audiovisual
					Arts Industrial Incubator Awards. Her recent music video "Un
					deciphered" was an official selection at the Silicon Valley
					Asian Pacific Film Festival. Her installation performance
					piece Unwrap! debuted at the Ming Contemporary Art Museum in
					Shanghai in 2021, alongside a series of improvised sound
					pieces at Himalayas Museum, FanRong Museum, and more.
				</p>
				<p className='p-4 textFont text-sm'>
					Her critically claimed album NAG was released on ShadowTrash
					TapeGroup (US) in 2018, MíngMíng 冥冥 on WV Sorcerer
					Productions (France+China) in 2020, which was honored No.1
					in RYM China session 2021, and her newest record Dream
					Hacker 夢之駭客, which was released on Bié records (China)
					in February 2023 and has received attention from press
					outlets such as Pitchfork (US), NPR (US), and The Threads
					Radio (UK).
				</p>
				<p className='p-4 textFont text-sm'>
					Onii left footprints in renowned institutions, venues and
					festivals such as Harvard University whrb 959fm in 2020 and
					Currents FM in 2021, SXSW US and Roadburn Festival
					(Netherlands) in 2023. Her written script for the
					self-produced music video "Un deciphered" was featured by
					Bié records, and under their curation, her ritual
					improvisation documentary across the Tibetan plateau was
					presented at Le Guess Who Cosmos Global in 2022.
				</p>
				<p className='p-4 textFont text-sm'>
					Her artistic practice is characterized by an experimental
					approach that defies genre boundaries, exploring electronic,
					ambient, sound collage, and noise, with the aim of breaking
					down the structures that limit creative expression and
					achieving a bodily connection through the synchronization of
					the heart and mind. She believes in echoes, and the
					potential of "solving a puzzle with another puzzle that
					can't be seen, be touched, but to feel."
				</p>
			</div>
		</FullContainer>
	)
}

export default Content
