/**
 * @typedef {import("@prismicio/client").Content.SoundLayout5Slice} SoundLayout5Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<SoundLayout5Slice>} SoundLayout5Props
 * @type {import("react").FC<SoundLayout5Props>}
 */
const SoundLayout5 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sound_layout5 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SoundLayout5;
