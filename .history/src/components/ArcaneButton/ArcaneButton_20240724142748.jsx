import { motion } from 'framer-motion'
import styles from './ArcaneButton.module.css'
import { Lottie } from 'lottie-react'
import animationData from '../../public/Navigation/tarot.json'
const ArcaneCircleButton = ({ onClick }) => {
	return (
		// <button
		// 	className='relative flex items-center justify-center w-20 h-20 bg-transparent border-2 border-gray-300 rounded-full overflow-hidden'
		// 	onClick={onClick}
		// >
		<motion.div
			className=' inset-0 flex items-center justify-center'
			initial={{ opacity: 0.5, scale: 0.5 }}
			whileHover={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
		>
			<Lottie
				animationData={arcaneCircleAnimation}
				style={{ width: '100%', height: '100%' }}
				loop
			/>
		</motion.div>
		// </button>
	)
}

export default ArcaneCircleButton
