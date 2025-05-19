'use client'
import Album from './components/Album'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import SliceZone from '@/components/SliceZone/SliceZone'

export default function Sounds() {
	const { data, isLoading } = usePrismicQuery({
		type: 'sounds',
	})
	if (isLoading) {
		return <div>Loading...</div>
	}
	console.log(data)
	return <SliceZone slices={data} />
	// return <h1>hie</h1>
}
