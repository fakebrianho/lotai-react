/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout2Slice} ProjectImageLayout2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout2Slice>} ProjectImageLayout2Props
 * @type {import("react").FC<ProjectImageLayout2Props>}
 */
const ProjectImageLayout2 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout2 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout2;
