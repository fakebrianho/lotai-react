import { motion } from 'framer-motion'
import styles from './ArcaneButton.module.css'
import Lottie from 'lottie-react'
import test from '../../../public/Navigation/lottie_white.json'

const ArcaneCircleButton = (props) => {
	return (
		<motion.div
			className={`fixed top-0 right-0 flex items-center justify-center ${
				styles.circleButton
			} ${props.bottomIsOpen ? styles.open : ''}`}
			animate={{ opacity: props.bottomIsOpen ? 0 : 0.5 }}
			whileHover={{ opacity: props.bottomIsOpen ? 0 : 1, scale: 0.6 }}
			transition={{ duration: 0.75, ease: 'easeInOut' }}
			onClick={props.onClick}
		>
			{test && <Lottie animationData={test} loop />}
			<p className='absolute text-white text-[clamp(11px,1.25vw,18px)] font-bold'>BACK</p>
		</motion.div>
	)
}

export default ArcaneCircleButton
