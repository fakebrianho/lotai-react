'use client'
import { usePrismicQuery } from '@/hooks/usePrismicData'
// import Header from '../components/Header/Header'
// import Content from '../components/Content/Content'
// import Awards from '../components/Awards/Awards'
// import Gallery from '../components/Gallery/Gallery'
// import Selected from '../components/Selected/Selected'
// import Shows from '../components/Shows/Shows'
import Header from '@/app/manifesto/components/Header/Header'
import Content from '@/app/manifesto/components/Content/Content'
import Awards from '@/app/manifesto/components/Awards/Awards'
import Gallery from '@/app/manifesto/components/Gallery/Gallery'
import Selected from '@/app/manifesto/components/Selected/Selected'
import Shows from '@/app/manifesto/components/Shows/Shows'

const components = {
	hero: ({ slice }) => (
		<Header
			img={slice.primary.manifesto_hero_image?.url}
			quote={slice.primary.manifesto_hero_quote}
		/>
	),
	biography_block: ({ slice }) => <Content data={[slice]} />,
	awards: () => <Awards />,
	gallery: () => <Gallery />,
	selected: () => <Selected />,
	shows: () => <Shows />,
}

export const SliceZone = ({ slices }) => {
	return slices?.map((slice, index) => {
		const Component = components[slice.slice_type]
		if (Component) {
			return <Component slice={slice} key={`slice-${index}`} />
		}
		return null
	})
}
