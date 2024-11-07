import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card2() {
  return (
    <div className="container flex justify-center items-center p-8">
      <div className="flex flex-wrap justify-center mt-4 gap-10 text-center">
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 max-w-xs transition-all">
          <Image src="/img4.webp" alt="hi" width={300} height={300} />
          <div className="p-5">
            <h5 className="text-lg font-semibold mb-2">SPF+2 Serum</h5>
            <p className="text-gray-600 mb-4">
              "Unlock the secret to radiant skin with Saki Care. Our natural products nourish and hydrate, leaving your skin smooth and glowing. Embrace the pure essence of vitality as you revitalize and renew your complexion."
            </p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
              <Link href="https://goodhabitskin.com">Order Now</Link>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 max-w-xs transition-all">
          <Image src="/img5.webp" alt="hi" width={300} height={300} />
          <div className="p-5">
            <h5 className="text-lg font-semibold mb-2">Charcoal Serum</h5>
            <p className="text-gray-600 mb-4">
              "Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality. Our luxe products revitalize and renew, offering a smooth, soft touch that refreshes and balances."
            </p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
              <Link href="https://goodhabitskin.com">Order Now</Link>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 max-w-xs transition-all">
          <Image src="/img4.webp" alt="hi" width={300} height={300} />
          <div className="p-5">
            <h5 className="text-lg font-semibold mb-2">Neem+SPF Serum</h5>
            <p className="text-gray-600 mb-4">
              "Unlock the secret to radiant skin with Saki Care. Our natural products nourish and hydrate, leaving your skin smooth and glowing. Embrace the pure essence of vitality as you revitalize and renew your complexion."
            </p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
              <Link href="https://goodhabitskin.com">Order Now</Link>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
