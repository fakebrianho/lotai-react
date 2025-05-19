import FullContainer from '@/components/FullContainer/FullContainer'
import styles from './Gallery.module.css'
function Gallery() {
	return (
		<FullContainer>
			<section>
				<div className={`${styles.grid1} ${styles.grid}`}>
					<div className={`${styles.imageContainer} ${styles.grid}`}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={`${styles.grid2} ${styles.grid}`}>
					<div className={`${styles.imageContainer} ${styles.grid}`}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={`${styles.grid3} ${styles.grid}`}>
					<div className={`${styles.imageContainer} ${styles.grid}`}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={`${styles.grid4} ${styles.grid}`}>
					<div className={`${styles.imageContainer} ${styles.grid}`}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={`${styles.grid5} ${styles.grid}`}>
					<div className={`${styles.imageContainer} ${styles.grid}`}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={`${styles.grid6} ${styles.grid}`}>
					<div className={`${styles.imageContainer} ${styles.grid}`}>
						<img src='/Manifesto/award1.png' alt='' />
					</div>
				</div>
				<div className={`${styles.grid7} ${styles.grid}`}>
					<div className={`${styles.imageContainer} ${styles.grid}`}>
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
