import style from './VideoGallery.module.css'
function VideoGallery({ children }) {
	console.log(children)
	return (
		<div>
			<div>{children[0]}</div>
		</div>
	)
}

export default VideoGallery
