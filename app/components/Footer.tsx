import Link from 'next/link';

import Accordion from './Accordion';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Accordion title="About SearchApp">
            <p className="mb-2">
              SearchApp is your premier destination for finding the latest technology products, from
              smartphones and laptops to gaming consoles and smart home devices.
            </p>
            <p>
              We provide detailed product information and competitive prices to help you make informed
              purchasing decisions.
            </p>
          </Accordion>

          <Accordion title="Customer Support">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Returns &amp; Exchanges</a></li>
              <li><a href="#" className="hover:underline">Shipping Information</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
            </ul>
          </Accordion>

          <Accordion title="Categories">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Audio &amp; Headphones</a></li>
              <li><a href="#" className="hover:underline">Gaming</a></li>
              <li><a href="#" className="hover:underline">Photography</a></li>
              <li><a href="#" className="hover:underline">Automotive</a></li>
            </ul>
          </Accordion>

          <Accordion title="Account &amp; Orders">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Order History</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Rewards Program</a></li>
            </ul>
          </Accordion>

          <Accordion title="Company Information">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Center</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Corporate Responsibility</a></li>
            </ul>
          </Accordion>

          <Accordion title="Legal &amp; Privacy">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Data Protection</a></li>
              <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
            </ul>
          </Accordion>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <Link href="/" className="hover:underline">
              SearchApp™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Visit our Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.5 18.75v-8.18h2.74l.41-3.19H5.5V5.33c0-.92.26-1.55 1.59-1.55h1.7V.99A21.7 21.7 0 0 0 6.19.99C3.78.99 2.13 2.4 2.13 5v2.38H0v3.19h2.13v8.18H5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Visit our Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 21 16" aria-hidden="true">
                <path d="M21 1.92a8.38 8.38 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.19 8.19 0 0 1-2.6.99A4.1 4.1 0 0 0 14.54 0c-2.27 0-4.1 1.87-4.1 4.18 0 .33.04.65.1.96A11.65 11.65 0 0 1 1.52.79a4.23 4.23 0 0 0-.56 2.1c0 1.45.74 2.73 1.86 3.48a4.07 4.07 0 0 1-1.86-.53v.05c0 2.03 1.42 3.72 3.3 4.1a4.07 4.07 0 0 1-1.85.07c.52 1.7 2.03 2.94 3.82 2.97A8.23 8.23 0 0 1 0 14.11 11.62 11.62 0 0 0 6.29 16c7.55 0 11.68-6.4 11.68-11.94 0-.18 0-.35-.01-.53A8.5 8.5 0 0 0 21 1.92Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="Visit our GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.36-3.37-1.36-.45-1.16-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.66.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.58 9.58 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .26.18.57.69.48A10.02 10.02 0 0 0 20 10c0-5.52-4.48-10-10-10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
