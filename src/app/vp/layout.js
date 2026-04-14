'use client'

import '../globals.css'
import Providers from '../providers'

export default function VpLayout({ children }) {
	return <Providers>{children}</Providers>
}
