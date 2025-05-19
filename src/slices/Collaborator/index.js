/**
 * @typedef {import("@prismicio/client").Content.CollaboratorSlice} CollaboratorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollaboratorSlice>} CollaboratorProps
 * @type {import("react").FC<CollaboratorProps>}
 */
const Collaborator = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for collaborator (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Collaborator;
