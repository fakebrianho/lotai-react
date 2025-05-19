/**
 * @typedef {import("@prismicio/client").Content.ProjectPageMediaSlice} ProjectPageMediaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectPageMediaSlice>} ProjectPageMediaProps
 * @type {import("react").FC<ProjectPageMediaProps>}
 */
const ProjectPageMedia = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_page_media (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default ProjectPageMedia;
