/**
 * @typedef {import("@prismicio/client").Content.SoundLayout4Slice} SoundLayout4Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<SoundLayout4Slice>} SoundLayout4Props
 * @type {import("react").FC<SoundLayout4Props>}
 */
const SoundLayout4 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sound_layout4 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SoundLayout4;
