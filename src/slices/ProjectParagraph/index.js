/**
 * @typedef {import("@prismicio/client").Content.ProjectParagraphSlice} ProjectParagraphSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectParagraphSlice>} ProjectParagraphProps
 * @type {import("react").FC<ProjectParagraphProps>}
 */
const ProjectParagraph = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_paragraph (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectParagraph;
