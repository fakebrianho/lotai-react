/**
 * @typedef {import("@prismicio/client").Content.ProjectHeaderInfoSlice} ProjectHeaderInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectHeaderInfoSlice>} ProjectHeaderInfoProps
 * @type {import("react").FC<ProjectHeaderInfoProps>}
 */
const ProjectHeaderInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_header_info (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectHeaderInfo;
