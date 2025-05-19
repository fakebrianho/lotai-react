/**
 * @typedef {import("@prismicio/client").Content.ProjectHeaderSlice} ProjectHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectHeaderSlice>} ProjectHeaderProps
 * @type {import("react").FC<ProjectHeaderProps>}
 */
const ProjectHeader = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_header (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectHeader;
