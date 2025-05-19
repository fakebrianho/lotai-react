import FullContainer from '@/components/FullContainer/FullContainer'
import styles from './Gallery.module.scss'
function Gallery() {
	return (
		<FullContainer>
			<section>
				<div>
					<div className={styles.imageContainer}></div>
				</div>
			</section>
		</FullContainer>
	)
}

export default Gallery
