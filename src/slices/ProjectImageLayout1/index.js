/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout1Slice} ProjectImageLayout1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout1Slice>} ProjectImageLayout1Props
 * @type {import("react").FC<ProjectImageLayout1Props>}
 */
const ProjectImageLayout1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout1 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout1;
