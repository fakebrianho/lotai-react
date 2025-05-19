import styles from './NavCard.module.css'

const navigate = () => {
	//
}

function NavCard({ image }) {
	console.log(image)
	return (
		<div
			className='z-10 w-[172.96px] h-[233.5px] box-border relative'
			data-url='manifesto'
		>
			<div className={`${styles.card__wrapper} inset-0 absolute`}>
				<div className={styles.card__3d}>
					<div className={styles.card__image}>
						<img src={image} />
					</div>
					<div className={styles.card__layer1}></div>
					<div className={styles.card__layer2}></div>
				</div>
			</div>
		</div>
	)
}

export default NavCard
