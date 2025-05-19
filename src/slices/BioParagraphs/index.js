/**
 * @typedef {import("@prismicio/client").Content.BioParagraphsSlice} BioParagraphsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BioParagraphsSlice>} BioParagraphsProps
 * @type {import("react").FC<BioParagraphsProps>}
 */
const BioParagraphs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for bio_paragraphs (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BioParagraphs;
