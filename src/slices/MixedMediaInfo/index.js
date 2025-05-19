/**
 * @typedef {import("@prismicio/client").Content.MixedMediaInfoSlice} MixedMediaInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MixedMediaInfoSlice>} MixedMediaInfoProps
 * @type {import("react").FC<MixedMediaInfoProps>}
 */
const MixedMediaInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for mixed_media_info (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MixedMediaInfo;
