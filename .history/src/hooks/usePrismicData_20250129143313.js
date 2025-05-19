import { useQuery } from '@tanstack/react-query'

import { useState, useEffect } from 'react'
import { createClient } from '@prismicio/client'

const $client = createClient('your-repo-name')

export default function usePrismicData(type) {
	return useQuery({
		queryKey: ['prismic', type],
		queryFn: async () => {
			const data = await $client.getSingle(type)
			return data
		},
	})
}
