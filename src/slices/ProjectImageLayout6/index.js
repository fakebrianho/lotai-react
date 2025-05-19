/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout6Slice} ProjectImageLayout6Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout6Slice>} ProjectImageLayout6Props
 * @type {import("react").FC<ProjectImageLayout6Props>}
 */
const ProjectImageLayout6 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout6 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout6;
