import FullContainer from '@/components/FullContainer/FullContainer'
import styles from './Gallery.module.scss'
function Gallery() {
	return (
		<FullContainer>
			<section>
				<div className={styles.grid1}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid2}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid3}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid4}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid5}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid6}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid7}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid8}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={styles.grid9}>
					<div className={styles.imageContainer}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
			</section>
		</FullContainer>
	)
}

export default Gallery
