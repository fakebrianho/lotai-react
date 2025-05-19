/**
 * @typedef {import("@prismicio/client").Content.EnterButtonSlice} EnterButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EnterButtonSlice>} EnterButtonProps
 * @type {import("react").FC<EnterButtonProps>}
 */
const EnterButton = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for enter_button (variation: {slice.variation})
      Slices
    </section>
  );
};

export default EnterButton;
