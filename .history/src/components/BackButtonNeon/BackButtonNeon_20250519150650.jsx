'use client'
import styles from './BackButtonNeon.module.css'
import { useRouter } from 'next/navigation'

function BackButtonNeon(props) {
	const router = useRouter()

	return (
		<h1
			className={styles.neon}
			data-text='U'
			onClick={() => router.push(`/mixmedia?drawersOpen=true`)}
		>
			B<span className={styles.flickerSlow}>A</span>C
			<span className={styles.flickerFast}>K</span>
		</h1>
	)
}

export default BackButtonNeon
