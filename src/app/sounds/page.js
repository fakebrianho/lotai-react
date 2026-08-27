'use client'
import Album from './components/Album'
import { usePrismicQuery } from '@/hooks/usePrismicData'
import SliceZone from '@/components/SliceZone/SliceZone'

export default function Sounds() {
	const { data, isLoading } = usePrismicQuery({
		type: 'sound',
	})
	if (isLoading) {
		return <div>Loading...</div>
	}
	// top offset keeps the first slice clear of the fixed back-button lottie
	return (
		<div className='pt-[clamp(90px,12vw,150px)]'>
			<SliceZone slices={data?.data?.slices} />
		</div>
	)
}
