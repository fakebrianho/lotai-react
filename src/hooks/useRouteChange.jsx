import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useRouteChange = (onRouteChangeComplete) => {
	const router = useRouter()

	useEffect(() => {
		if (typeof window === 'undefined') return

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
