/**
 * @typedef {import("@prismicio/client").Content.VideoImageSlice} VideoImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoImageSlice>} VideoImageProps
 * @type {import("react").FC<VideoImageProps>}
 */
const VideoImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VideoImage;
