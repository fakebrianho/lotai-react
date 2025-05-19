'use client'

import { Inter } from 'next/font/google'
import '../../globals.css'
// Remove the Providers import
// import Providers from '../../providers'

const inter = Inter({ subsets: ['latin'] })

export default function ProjectLayout({ children }) {
	console.log('video [id] layout rendering')
	return <div className={inter.className}>{children}</div>
}
