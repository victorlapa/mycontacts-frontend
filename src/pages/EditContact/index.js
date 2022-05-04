import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  return (
    <>
      <PageHeader title="Edit contact" />

      <ContactForm buttonLabel="Save changes" />
    </>
  );
}
