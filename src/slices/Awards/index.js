/**
 * @typedef {import("@prismicio/client").Content.AwardsSlice} AwardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AwardsSlice>} AwardsProps
 * @type {import("react").FC<AwardsProps>}
 */
const Awards = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for awards (variation: {slice.variation}) Slices
    </section>
  );
};

export default Awards;
