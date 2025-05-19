function NavCard({ image }) {
	return (
		<div className='card' data-url='manifesto'>
			<div className='card__wrapper'>
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
