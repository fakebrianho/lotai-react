/**
 * @typedef {import("@prismicio/client").Content.BiographyBlockSlice} BiographyBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BiographyBlockSlice>} BiographyBlockProps
 * @type {import("react").FC<BiographyBlockProps>}
 */
const BiographyBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for biography_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BiographyBlock;
