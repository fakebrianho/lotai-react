'use client'
import styles from './BackArrow.module.css'
import { useRouter } from 'next/navigation'

function BackArrow(props) {
	const router = useRouter()

	return (
		<button
			className={styles.backArrow}
			aria-label='Back'
			onClick={() => router.push(`/${props.url}?drawersOpen=true`)}
		>
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<line x1='21' y1='12' x2='4' y2='12' />
				<polyline points='11 5 4 12 11 19' />
			</svg>
		</button>
	)
}

export default BackArrow
