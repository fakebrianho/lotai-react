/**
 * @typedef {import("@prismicio/client").Content.SliderImageSlice} SliderImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderImageSlice>} SliderImageProps
 * @type {import("react").FC<SliderImageProps>}
 */
const SliderImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slider_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SliderImage;
