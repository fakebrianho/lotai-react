/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout4Slice} ProjectImageLayout4Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout4Slice>} ProjectImageLayout4Props
 * @type {import("react").FC<ProjectImageLayout4Props>}
 */
const ProjectImageLayout4 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout4 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout4;
