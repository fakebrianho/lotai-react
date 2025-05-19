import { useQuery } from '@tanstack/react-query'

import { useState, useEffect } from 'react'
import { createClient } from '@prismicio/client'

const $client = createClient('your-repo-name')

export default function usePrismicData(type) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
}
