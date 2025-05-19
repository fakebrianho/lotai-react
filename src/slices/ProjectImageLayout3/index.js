/**
 * @typedef {import("@prismicio/client").Content.ProjectImageLayout3Slice} ProjectImageLayout3Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageLayout3Slice>} ProjectImageLayout3Props
 * @type {import("react").FC<ProjectImageLayout3Props>}
 */
const ProjectImageLayout3 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image_layout3 (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectImageLayout3;
