/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout8Slice} ProjectImageLayout8Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout8Slice>} ProjectImageLayout8Props
 * @type {import("react").FC<ProjectImageLayout8Props>}
 */
const ProjectImageLayout8 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout8 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout8;
