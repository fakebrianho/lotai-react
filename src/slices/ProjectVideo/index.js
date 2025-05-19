/**
 * @typedef {import("@prismicio/client").Content.ProjectVideoSlice} ProjectVideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectVideoSlice>} ProjectVideoProps
 * @type {import("react").FC<ProjectVideoProps>}
 */
const ProjectVideo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_video (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectVideo;
