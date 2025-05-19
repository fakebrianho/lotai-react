/**
 * @typedef {import("@prismicio/client").Content.ProjectLayout2Slice} ProjectLayout2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectLayout2Slice>} ProjectLayout2Props
 * @type {import("react").FC<ProjectLayout2Props>}
 */
const ProjectLayout2 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_layout2 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectLayout2;
