/**
 * @typedef {import("@prismicio/client").Content.VimeoSlice} VimeoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VimeoSlice>} VimeoProps
 * @type {import("react").FC<VimeoProps>}
 */
const Vimeo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for vimeo (variation: {slice.variation}) Slices
    </section>
  );
};

export default Vimeo;
