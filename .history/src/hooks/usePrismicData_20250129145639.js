'use client'

import { useQuery } from '@tanstack/react-query'
import { createClient } from '@prismicio/client'

const $client = createClient('otay')

export function usePrismicQuery({ type, queryType = 'single', options = {} }) {
	return useQuery({
		queryKey: ['prismic', type, queryType],
		queryFn: async () => {
			if (queryType === 'single') {
				return await $client.getSingle(type)
			}

			// For repeatable types
			return await $client.getAllByType(type, options)
		},
	})
}
