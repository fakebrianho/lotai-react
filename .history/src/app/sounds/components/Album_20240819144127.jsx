import SplitContainer from '@/components/SplitContainer/SplitContainer'
function Album() {
	return (
		<SplitContainer debug={true}>
			<div className='flex flex-col items-center justify-center w-1/2'>
				{/* <div className='flex flex-col items-center justify-center'>
					<img src='/AlbumCovers/Set1/1.png' alt='Sound 1' />
					<p className='flex-start'>Photo By: Mars</p>
				</div>
				<div>
					<h3>Listen Here</h3>
				</div> */}
			</div>
			{/* <div>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed ut purus eget sapien.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed ut purus eget sapien.
					</p>
				</div>
			</div> */}
		</SplitContainer>
	)
}

export default Album
