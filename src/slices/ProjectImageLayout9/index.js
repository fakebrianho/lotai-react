/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout9Slice} ProjectImageLayout9Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout9Slice>} ProjectImageLayout9Props
 * @type {import("react").FC<ProjectImageLayout9Props>}
 */
const ProjectImageLayout9 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout9 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout9;
