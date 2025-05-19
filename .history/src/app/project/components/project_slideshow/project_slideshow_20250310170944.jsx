import React, { useState } from 'react'
import styles from './project_slideshow.module.css'

function ProjectSlideshow({ children }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? children.length - 1 : prevIndex - 1
		)
	}

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === children.length - 1 ? 0 : prevIndex + 1
		)
	}

	return (
		<div className={styles.container}>
			<button onClick={goToPrevious}>Previous</button>
			<div className={styles.slide}>{children[currentIndex]}</div>
			<button onClick={goToNext}>Next</button>
		</div>
	)
}

export default ProjectSlideshow
