import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const useRouteChange = (onRouteChangeComplete) => {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChangeComplete = () => {
			onRouteChangeComplete()
		}

		router.events.on('routeChangeComplete', handleRouteChangeComplete)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChangeComplete)
		}
	}, [router, onRouteChangeComplete])
}

export default useRouteChange
