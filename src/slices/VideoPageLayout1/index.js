/**
 * @typedef {import("@prismicio/client").Content.VideoPageLayout1Slice} VideoPageLayout1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoPageLayout1Slice>} VideoPageLayout1Props
 * @type {import("react").FC<VideoPageLayout1Props>}
 */
const VideoPageLayout1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_page_layout1 (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default VideoPageLayout1;
