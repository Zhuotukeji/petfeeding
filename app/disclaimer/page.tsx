import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Pet Feeding Guide',
  description: 'Important disclaimer for Pet Feeding Guide. Please read before using our pet nutrition information.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
          <p className="text-gray-500 text-sm mb-6">Last updated: April 8, 2026</p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-800 font-medium">
              Important: The information on this website is for educational purposes only and does not constitute professional veterinary advice.
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Not Veterinary Advice</h2>
            <p className="text-gray-700">
              Pet Feeding Guide provides general educational information about pet nutrition and feeding practices. This information is not intended to substitute for professional veterinary advice, diagnosis, or treatment. Always seek the guidance of a qualified veterinarian with any questions you may have regarding your pet&apos;s health, nutrition, or medical condition.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Information Accuracy</h2>
            <p className="text-gray-700">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information on this website. Nutritional science is constantly evolving, and recommendations may change over time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Individual Pet Variation</h2>
            <p className="text-gray-700">
              Every pet is unique. Age, breed, size, health status, activity level, and individual metabolism all affect nutritional needs. General guidelines provided on this website may not be appropriate for every individual animal. A veterinarian familiar with your pet can provide personalized dietary recommendations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Emergency Situations</h2>
            <p className="text-gray-700">
              If your pet is experiencing a medical emergency, do not rely on information from this website. Contact an emergency veterinary clinic immediately. Signs of emergency include severe vomiting, difficulty breathing, suspected poisoning, seizures, or major trauma.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">External Links</h2>
            <p className="text-gray-700">
              Our website may contain links to external websites. We are not responsible for the content or privacy practices of these sites and do not endorse any products or services they may offer.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Limitation of Liability</h2>
            <p className="text-gray-700">
              Pet Feeding Guide shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use information provided on this website, or from any errors or omissions in the content.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Advertising Disclosure</h2>
            <p className="text-gray-700">
              This website uses Google AdSense for Search to provide search functionality. Search results may include paid advertisements. We receive compensation from Google based on user interactions with these advertisements. Our editorial content is not influenced by advertising relationships.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Questions</h2>
            <p className="text-gray-700">
              If you have questions about this disclaimer, please <a href="/contact" className="text-green-600 hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
