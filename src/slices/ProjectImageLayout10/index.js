/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout10Slice} ProjectImageLayout10Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout10Slice>} ProjectImageLayout10Props
 * @type {import("react").FC<ProjectImageLayout10Props>}
 */
const ProjectImageLayout10 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout10 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout10;
