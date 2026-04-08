import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Pet Feeding Guide',
  description: 'Learn about Pet Feeding Guide, your trusted source for comprehensive pet nutrition and feeding advice.',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-gray-700 text-lg">
              Welcome to Pet Feeding Guide, your trusted source for comprehensive pet nutrition and feeding advice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide pet owners with accurate, helpful, and up-to-date information about proper pet nutrition. We believe that a well-fed pet is a happy, healthy pet, and we are dedicated to helping you give your animals the best possible care.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">What We Cover</h2>
            <p className="text-gray-700">
              We provide feeding guides and nutrition information for a wide variety of pets, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Dogs</strong> - Puppies, adult dogs, and senior dogs of all breeds and sizes</li>
              <li><strong>Cats</strong> - Kittens, adult cats, and senior cats with special dietary needs</li>
              <li><strong>Birds</strong> - Parrots, canaries, finches, budgies, cockatiels, and more</li>
              <li><strong>Other Pets</strong> - Rabbits, guinea pigs, hamsters, ferrets, reptiles, and other small animals</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Our Approach</h2>
            <p className="text-gray-700">
              All information on our site is based on current veterinary recommendations and nutritional science. We strive to provide practical, easy-to-understand guidance that you can immediately apply to improve your pet&apos;s diet and overall health.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Important Disclaimer</h2>
            <p className="text-gray-700">
              While we work hard to provide accurate information, our content is for educational purposes only and should not replace professional veterinary advice. Always consult with a qualified veterinarian for specific health concerns about your pet.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact Us</h2>
            <p className="text-gray-700">
              Have questions or suggestions? We&apos;d love to hear from you. Visit our <a href="/contact" className="text-green-600 hover:underline">Contact page</a> to get in touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
