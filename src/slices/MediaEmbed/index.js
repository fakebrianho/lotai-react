/**
 * @typedef {import("@prismicio/client").Content.MediaEmbedSlice} MediaEmbedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MediaEmbedSlice>} MediaEmbedProps
 * @type {import("react").FC<MediaEmbedProps>}
 */
const MediaEmbed = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for media_embed (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MediaEmbed;
