import { motion } from 'framer-motion'

const ArcaneCircleButton = ({ onClick }) => {
	return (
		// <button
		// 	className='relative flex items-center justify-center w-20 h-20 bg-transparent border-2 border-gray-300 rounded-full overflow-hidden'
		// 	onClick={onClick}
		// >
		<motion.div
			className='absolute inset-0 flex items-center justify-center'
			initial={{ opacity: 0, scale: 0 }}
			whileHover={{ opacity: 1, scale: 1 }} // Moved to the correct motion.div
			transition={{ duration: 0.5, ease: 'easeInOut' }}
		>
			// <span className='text-white'>Back</span>
			{/* <motion.div
				className='absolute w-full h-full border-2 border-white rounded-full'
				animate={{ rotate: 360 }}
				transition={{
					repeat: Infinity,
					duration: 5,
					ease: 'linear',
				}}
			/> */}
		</motion.div>
		// </button>
	)
}

export default ArcaneCircleButton
