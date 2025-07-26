import React, { Suspense } from 'react';
const ContactSection = React.lazy(() => import('../components/ContactSection'));
import LoadingSpinner from '../components/LoadingSpinner';

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24 bg-white min-h-[60vh]">
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
    </section>
  );
} 