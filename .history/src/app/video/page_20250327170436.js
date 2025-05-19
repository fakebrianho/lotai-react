'use client'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import Menu from '@/components/Menu/Menu'
export default function Contact() {
	const { data, isLoading } = usePrismicQuery({
		type: 'mixedmedia',
	})
	if (data) {
		console.log('videoData', data?.data?.slices)
	}

	return <h1>Contact</h1>
}
