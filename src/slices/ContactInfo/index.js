/**
 * @typedef {import("@prismicio/client").Content.ContactInfoSlice} ContactInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactInfoSlice>} ContactInfoProps
 * @type {import("react").FC<ContactInfoProps>}
 */
const ContactInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_info (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContactInfo;
