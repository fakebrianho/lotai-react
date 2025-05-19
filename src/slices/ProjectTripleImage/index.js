/**
 * @typedef {import("@prismicio/client").Content.ProjectTripleImageSlice} ProjectTripleImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectTripleImageSlice>} ProjectTripleImageProps
 * @type {import("react").FC<ProjectTripleImageProps>}
 */
const ProjectTripleImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_triple_image (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ProjectTripleImage;
