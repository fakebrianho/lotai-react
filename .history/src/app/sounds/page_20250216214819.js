'use client'
import Album from './components/Album'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import SliceZone from '@/components/SliceZone/SliceZone'

export default function Sounds() {
	const { data, isLoading } = usePrismicQuery({
		type: 'Test',
	})
	console.log(data)
	return <SliceZone slices={data} />
}
