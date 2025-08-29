import ContactInfo from '@/components/ContactInfo';
import SendEmailForm from './send-email-form';

export const metadata = {
  title: "Contact tecGrw | Agriculture Technology & AI Solutions Rwanda | Get Quote Kigali",
  description: "Contact tecGrw for agriculture technology and AI solutions in Rwanda. Get expert consultation on hydroponics, smart farming, game park security, AI for business, and tech training. Serving Kigali and East Africa."
};

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
