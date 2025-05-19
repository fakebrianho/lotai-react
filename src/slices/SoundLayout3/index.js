/**
 * @typedef {import("@prismicio/client").Content.SoundLayout3Slice} SoundLayout3Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<SoundLayout3Slice>} SoundLayout3Props
 * @type {import("react").FC<SoundLayout3Props>}
 */
const SoundLayout3 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sound_layout3 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SoundLayout3;
