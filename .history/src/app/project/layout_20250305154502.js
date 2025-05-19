'use client'

import { Inter } from 'next/font/google'
// import '../globals.css'
import '../globals.css'
import localFont from 'next/font/local'

import Providers from '../providers'
const textFont = localFont({
	src: '../../../public/Fonts/inconsolata/Inconsolata-Regular.ttf',
	variable: '--font-text',
})

const subFont = localFont({
	src: '../../../public/Fonts/karla/Karla-Regular.ttf',
	variable: '--font-sub',
})

const monsterFont = localFont({
	src: '../../../public/Fonts/Rubik_Beastly/RubikBeastly-Regular.ttf',
	variable: '--font-monster',
})

const scriptFont = localFont({
	src: '../../../public/Fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf',
	variable: '--font-script',
})
const inter = Inter({ subsets: ['latin'] })

export default function ProjectLayout({ children }) {
	console.log('Project [id] layout rendering') // Add this line

	return (
		<div className={inter.className}>
			<Providers>{children}</Providers>
		</div>
	)
}
