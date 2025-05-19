'use client'
import Album from './components/Album'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import SliceZone from '@/components/SliceZone/SliceZone'

export default function Sounds() {
	const { data, isLoading } = usePrismicQuery({
		type: 'sound',
	})
	// console.log(data)
	if (isLoading) {
		return <div>Loading...</div>
	}
	return <SliceZone slices={data?.data?.slices} />
}
