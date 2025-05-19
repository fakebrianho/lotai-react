import styles from './page.module.css'

export default function Shows(props) {
	return (
		<div className={styles.container}>
			<a
				href='https://www.songkick.com/artists/9684569'
				class='songkick-widget'
				data-theme='dark'
				data-track-button='on'
				data-detect-style='true'
				data-font-color='#f9e6e6'
				data-background-color='#000000'
			>
				Otay:onii tour dates
			</a>
		</div>
	)
}
