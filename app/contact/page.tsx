import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Pet Feeding Guide',
  description: 'Get in touch with Pet Feeding Guide. We welcome your questions, feedback, and suggestions.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-gray-700 text-lg">
              We welcome your questions, feedback, and suggestions. Please use the information below to reach us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">General Inquiries</h2>
            <p className="text-gray-700">
              For general questions about pet feeding or our website content, please reach out to us. We aim to respond to all inquiries within 2-3 business days.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Content Feedback</h2>
            <p className="text-gray-700">
              If you notice any inaccuracies in our content, or have suggestions for additional topics, we appreciate your feedback. We are committed to providing accurate, helpful information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Business Inquiries</h2>
            <p className="text-gray-700">
              For advertising, partnership, or other business inquiries, please indicate the nature of your request in your message.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Email Us</h3>
              <p className="text-green-700">
                contact@petfeedingguide.com
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Important Notice</h2>
            <p className="text-gray-700">
              We are not a veterinary service. For urgent health concerns about your pet, please contact a qualified veterinarian or emergency animal hospital immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
