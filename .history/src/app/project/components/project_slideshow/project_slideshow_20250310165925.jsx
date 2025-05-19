import styles from './project_slideshow.module.css'
function ProjectSlideshow({ children }) {
	console.log('hiii')
	return <div className={styles.container}>{children}</div>
}

export default ProjectSlideshow
