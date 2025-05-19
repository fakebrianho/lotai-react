/**
 * @typedef {import("@prismicio/client").Content.ProjectImageSlice} ProjectImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectImageSlice>} ProjectImageProps
 * @type {import("react").FC<ProjectImageProps>}
 */
const ProjectImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectImage;
