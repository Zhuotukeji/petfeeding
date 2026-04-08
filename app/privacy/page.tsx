import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pet Feeding Guide',
  description: 'Privacy Policy for Pet Feeding Guide. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-6">Last updated: April 8, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-gray-700">
              This Privacy Policy describes how Pet Feeding Guide (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information about you when you use our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900">Information You Provide</h3>
            <p className="text-gray-700">
              We collect information you provide directly, such as when you contact us via email or submit feedback.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Automatically Collected Information</h3>
            <p className="text-gray-700">
              When you visit our website, we automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on each page</li>
              <li>Search queries made on our site</li>
              <li>Referring website information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">How We Use Your Information</h2>
            <p className="text-gray-700">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide and improve our website services</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Respond to your inquiries and feedback</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Google AdSense and Search</h2>
            <p className="text-gray-700">
              Our website uses Google AdSense for Search (AFS) to provide search functionality. When you use our search feature, your search queries and usage data are processed by Google according to their Privacy Policy. Google may use this information to display relevant advertisements in search results.
            </p>
            <p className="text-gray-700">
              By using our search functionality, you agree to Google&apos;s use of data as described in their Privacy Policy and Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Cookies</h2>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to enhance your experience on our website. These include essential cookies for site functionality and analytics cookies to understand usage patterns. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Service providers who assist in website operations</li>
              <li>Analytics providers to understand website usage</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Your Rights</h2>
            <p className="text-gray-700">
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. Contact us to exercise these rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of significant changes by updating the date at the top of this page.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at <a href="/contact" className="text-green-600 hover:underline">our contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
