import { motion } from 'framer-motion'
import styles from './ArcaneButton.module.css'
import Lottie from 'lottie-react'
import test from '../../../public/Navigation/bruh.json'

const ArcaneCircleButton = (props) => {
	return (
		<motion.div
			className={`fixed top-0 right-0 flex items-center justify-center ${
				styles.circleButton
			} ${props.bottomIsOpen ? styles.open : ''}`}
			initial={{ opacity: 0.5, scale: 0.5 }}
			whileHover={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			onClick={props.onClick}
		>
			{test && <Lottie animationData={test} loop />}
			<p className='absolute text-white text-xl font-bold'>BACK</p>
		</motion.div>
	)
}

export default ArcaneCircleButton
