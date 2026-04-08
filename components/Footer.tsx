import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Pet Feeding Guide</h3>
            <p className="text-sm text-gray-600">
              Your trusted source for pet nutrition and feeding advice.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dogs" className="text-sm text-gray-600 hover:text-green-600">
                  Dogs
                </Link>
              </li>
              <li>
                <Link href="/cats" className="text-sm text-gray-600 hover:text-green-600">
                  Cats
                </Link>
              </li>
              <li>
                <Link href="/birds" className="text-sm text-gray-600 hover:text-green-600">
                  Birds
                </Link>
              </li>
              <li>
                <Link href="/other-pets" className="text-sm text-gray-600 hover:text-green-600">
                  Other Pets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-green-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-green-600">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Pet Feeding Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
