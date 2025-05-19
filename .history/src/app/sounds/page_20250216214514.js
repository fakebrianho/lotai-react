import Album from './components/Album'
import { usePrismicQuery } from '@/hooks/usePrismicData'

export default function Sounds() {
	const { data, isLoading } = usePrismicQuery({
		type: 'sound',
	})
	return <Album />
}
