/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout7Slice} ProjectImageLayout7Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout7Slice>} ProjectImageLayout7Props
 * @type {import("react").FC<ProjectImageLayout7Props>}
 */
const ProjectImageLayout7 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout7 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout7;
