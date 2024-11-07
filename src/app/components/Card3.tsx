import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card3() {
  return (
    <div className="container flex justify-center items-center p-8">
      <div className="flex flex-wrap justify-center mt-4 gap-10 text-center">
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 max-w-xs transition-all">
          <Image src="/img6.gif" alt="hi" width={300} height={300} />
          <div className="p-5">
            <h5 className="text-lg font-semibold mb-2">Hydro+X Serum</h5>
            <p className="text-gray-600 mb-4">
              "Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality."
            </p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
              <Link href="https://goodhabitskin.com">Order Now</Link>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 max-w-xs transition-all">
          <Image src="/img7.gif" alt="hi" width={300} height={300} />
          <div className="p-5">
            <h5 className="text-lg font-semibold mb-2">Windest Serum</h5>
            <p className="text-gray-600 mb-4">
              "Unlock the secret to radiant skin with Saki Care. Our natural products nourish and hydrate, leaving your skin smooth and glowing."
            </p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
              <Link href="https://goodhabitskin.com">Order Now</Link>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-100 max-w-xs transition-all">
          <Image src="/img8.gif" alt="hi" width={300} height={300} />
          <div className="p-5">
            <h5 className="text-lg font-semibold mb-2">Serum E+V</h5>
            <p className="text-gray-600 mb-4">
              "Experience the pure essence of radiant beauty with Saki Care. Nourish and hydrate your skin for a natural, glowing vitality."
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
