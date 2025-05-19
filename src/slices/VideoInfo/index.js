/**
 * @typedef {import("@prismicio/client").Content.VideoInfoSlice} VideoInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoInfoSlice>} VideoInfoProps
 * @type {import("react").FC<VideoInfoProps>}
 */
const VideoInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_info (variation: {slice.variation}) Slices
    </section>
  );
};

export default VideoInfo;
