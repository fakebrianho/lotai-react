import { motion } from 'framer-motion'

const ArcaneCircleButton = ({ onClick }) => {
	return (
		// <button
		// 	className='relative flex items-center justify-center w-20 h-20 bg-transparent border-2 border-gray-300 rounded-full overflow-hidden'
		// 	onClick={onClick}
		// >
		<motion.div className='absolute inset-0 flex items-center justify-center'>
			// <span className='text-white'>Back</span>
		</motion.div>
		// </button>
	)
}

export default ArcaneCircleButton
