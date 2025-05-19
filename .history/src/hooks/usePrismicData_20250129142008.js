import { useState, useEffect } from 'react'
import { createClient } from '@prismicio/client'

export default function usePrismicData(type) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
}
