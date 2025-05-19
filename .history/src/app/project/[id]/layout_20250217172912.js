'use client'

import { Inter } from 'next/font/google'
// import '../globals.css'
import '../../globals.css'

import Providers from '../../providers'

const inter = Inter({ subsets: ['latin'] })

export default function ProjectLayout({ children }) {
	return (
		<div className={inter.className}>
			<Providers>{children}</Providers>
		</div>
	)
}
