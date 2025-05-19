import SplitContainer from '@/components/SplitContainer/SplitContainer'
function Album() {
	return (
		<SplitContainer debug={true}>
			<div className='flex flex-col items-center justify-center w-1/2'>
				<div className='flex flex-col items-center justify-center'>
					<img
						src='/AlbumCovers/Set1/1.png'
						alt='Sound 1'
						className='w-[400px] object-cover mb-6'
					/>
					<p className='self-start textFont text-sm mb-4'>
						Photo By: Mars
					</p>
				</div>
				<div>
					<h3 className='textFont'>Listen Here</h3>
				</div>
			</div>
			<div>
				<div>
					<p>
						This album archived songs written from August 2020 -
						March 2022, in China, Through the milligrams of
						execrement's molecules, I found a whle dimension of
						universe.
					</p>
					<p>
						This is an album released in 2023 by Bie Records
						(Vinyls, China) who is collaboration with WV Sorcerer
						Productions (cassettes, France) and No Gold (US).
					</p>
				</div>
			</div>
		</SplitContainer>
	)
}

export default Album
