'use client'

import { Inter } from 'next/font/google'
// import '../globals.css'
import '../globals.css'
import localFont from 'next/font/local'

import Providers from '../providers'

const inter = Inter({ subsets: ['latin'] })

export default function ProjectLayout({ children }) {
	console.log('Project [id] layout rendering') // Add this line

	return (
		<div className={inter.className}>
			<Providers>{children}</Providers>
		</div>
	)
}
