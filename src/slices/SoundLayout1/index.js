/**
 * @typedef {import("@prismicio/client").Content.SoundLayout1Slice} SoundLayout1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<SoundLayout1Slice>} SoundLayout1Props
 * @type {import("react").FC<SoundLayout1Props>}
 */
const SoundLayout1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sound_layout1 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SoundLayout1;
