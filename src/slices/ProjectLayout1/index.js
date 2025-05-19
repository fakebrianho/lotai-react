/**
 * @typedef {import("@prismicio/client").Content.ProjectLayout1Slice} ProjectLayout1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectLayout1Slice>} ProjectLayout1Props
 * @type {import("react").FC<ProjectLayout1Props>}
 */
const ProjectLayout1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_layout1 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectLayout1;
