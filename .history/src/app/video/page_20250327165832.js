'use client'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import Menu from '@/components/Menu/Menu'
export default function Contact() {
	const { data, isLoading } = usePrismicQuery({
		type: 'mixedmedia',
	})
	return <h1>Contact</h1>
}
