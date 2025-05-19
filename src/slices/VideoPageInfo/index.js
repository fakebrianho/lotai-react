/**
 * @typedef {import("@prismicio/client").Content.VideoPageInfoSlice} VideoPageInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoPageInfoSlice>} VideoPageInfoProps
 * @type {import("react").FC<VideoPageInfoProps>}
 */
const VideoPageInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_page_info (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VideoPageInfo;
