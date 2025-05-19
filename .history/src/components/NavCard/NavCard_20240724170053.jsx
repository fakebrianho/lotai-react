function NavCard({ image }) {
	return (
		<div
			className='z-10 w-[172.96px] h-[233.5px] box-border relative'
			data-url='manifesto'
		>
			<div className=''>
				<div className='card__3d'>
					<div className='card__image'>
						<img src={image} />
					</div>
					<div className='card__layer1'></div>
					<div className='card__layer2'></div>
				</div>
			</div>
		</div>
	)
}

export default NavCard
