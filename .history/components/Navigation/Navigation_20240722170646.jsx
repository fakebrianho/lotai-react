'use client'

import { useState } from 'react'
import Drawer from 'react-modern-drawer'

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState)
	}

	return (
		<>
			<button onClick={toggleDrawer}>Open Drawer</button>
			<Drawer open={isOpen} onClose={toggleDrawer} direction='top'>
				<h1>Hello World</h1>
			</Drawer>
		</>
	)
}
