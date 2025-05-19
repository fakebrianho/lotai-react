/**
 * @typedef {import("@prismicio/client").Content.AfdsfSlice} AfdsfSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AfdsfSlice>} AfdsfProps
 * @type {import("react").FC<AfdsfProps>}
 */
const Afdsf = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for afdsf (variation: {slice.variation}) Slices
    </section>
  );
};

export default Afdsf;
