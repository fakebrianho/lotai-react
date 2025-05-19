import { motion } from 'framer-motion'
import styles from './ArcaneButton.module.css'
import { Lottie } from 'lottie-react'
// import tarot from '/tarot.json'
// import Anim from '/Navigation/Animation - 1721848769581.json'
import test from '/bruh.html'

const ArcaneCircleButton = ({ onClick }) => {
	// const animationData = dynamic(() => import('/Navigation/tarot.json'), {
	// ssr: false,
	// })

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
				animationData={animationData}
				style={{ width: '100%', height: '100%' }}
				loop
			/>
		</motion.div>
		// </button>
	)
}

export default ArcaneCircleButton
