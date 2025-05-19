const SliceZone = ({ slices }) => {
	return slices?.map((slice, index) => {
		const Component = components[slice.slice_type]
		if (Component) {
			return <Component slice={slice} key={`slice-${index}`} />
		}
		return null
	})
}
