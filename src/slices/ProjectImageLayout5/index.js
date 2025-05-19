/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout5Slice} ProjectImageLayout5Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout5Slice>} ProjectImageLayout5Props
 * @type {import("react").FC<ProjectImageLayout5Props>}
 */
const ProjectImageLayout5 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout5 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout5;
