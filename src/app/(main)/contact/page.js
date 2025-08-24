import ContactInfo from '@/components/ContactInfo';
import SendEmailForm from './send-email-form';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <SendEmailForm />
        </div>
    </div>
  );
}
