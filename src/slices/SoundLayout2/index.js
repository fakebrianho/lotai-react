/**
 * @typedef {import("@prismicio/client").Content.SoundLayout2Slice} SoundLayout2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<SoundLayout2Slice>} SoundLayout2Props
 * @type {import("react").FC<SoundLayout2Props>}
 */
const SoundLayout2 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sound_layout2 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SoundLayout2;
