'use client'
import styles from './NavCard.module.css'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const navigate = () => {
	//
}
const pageTransition = {
	out: {
		opacity: 0,
		// y: 40,
		transition: {
			duration: 1.75,
		},
	},
	in: {
		opacity: 1,
		// y: 0,
		transition: {
			duration: 2.0,
			delay: 1,
		},
	},
}

function NavCard({ image, url }) {
	const router = useRouter()
	const handleClick = () => {
		router.push(url)
	}
	return (
		<div
			className='z-10 w-[172.96px] h-[233.5px] box-border relative'
			data-url='manifesto'
		>
			<div
				className={`${styles.card__wrapper} inset-0 absolute`}
				onClick={handleClick}
			>
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
