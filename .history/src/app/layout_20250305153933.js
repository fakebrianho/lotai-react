'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ReactLenis, useLenis } from 'lenis/react'
import dynamic from 'next/dynamic'
import NavCard from '@/components/NavCard/NavCard'
import Fader from '@/components/Fader/Fader'
import CustomHead from './head'
import { useState } from 'react'
import Providers from './providers'
import { usePathname } from 'next/navigation'
import localFont from 'next/font/local'

const textFont = localFont({
	src: '../Fonts/inconsolata/Inconsolata-Regular.ttf',
	variable: '--font-text',
})

const subFont = localFont({
	src: '../Fonts/karla/Karla-Regular.ttf',
	variable: '--font-sub',
})

const monsterFont = localFont({
	src: '../Fonts/Rubik_Beastly/RubikBeastly-Regular.ttf',
	variable: '--font-monster',
})

const scriptFont = localFont({
	src: '../Fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf',
	variable: '--font-script',
})

const inter = Inter({ subsets: ['latin'] })
const Navigation = dynamic(
	() => import('../components/Navigation/Navigation'),
	{ ssr: false }
)

export default function RootLayout({ children }) {
	const [isScrollDisabled, setIsScrollDisabled] = useState(true)
	const lenis = useLenis()
	const pathname = usePathname()
	const isProjectPage = pathname.startsWith('/project/')

	return (
		<html lang='en'>
			<CustomHead />

			<body className={inter.className}>
				<Providers>
					{!isProjectPage && (
						<>
							<Navigation
								scroll={isScrollDisabled}
								setScroll={setIsScrollDisabled}
								lenis={lenis}
							>
								<NavCard
									image={'/Navigation/manifesto.png'}
									url='/manifesto'
								/>
								<NavCard
									image={'/Navigation/sounds.png'}
									url='/sounds'
								/>
								<NavCard
									image={'/Navigation/mix_media.png'}
									url='/mixmedia'
								/>
								<NavCard
									image={'/Navigation/video.png'}
									url='/video'
								/>
								<NavCard
									image={'/Navigation/shows.png'}
									url='/shows'
								/>
								<NavCard
									image={'/Navigation/contact.png'}
									url='/contact'
								/>
							</Navigation>
							<Fader scroll={isScrollDisabled} lenis={lenis} />
							{/* <Fader /> */}
						</>
					)}
					<ReactLenis root>{children}</ReactLenis>
				</Providers>
			</body>
		</html>
	)
}
