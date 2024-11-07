import React from 'react';

const About = () => {
  return (
  
    <div className="container mx-auto p-8 bg-gray-50 text-gray-800">
      <br /><br />
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gradient">
        About <span className="text-blue-500">Cerum</span>
      </h1>

      {/* Brand Story Section */}
      <section className="mb-12 p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Cerum was founded with a vision to bring natural, nourishing skincare solutions to everyone. Our journey began with a passion for harnessing the power of nature to create effective, gentle, and sustainable skincare products.
        </p>
      </section>

      {/* Core Ingredients Section */}
      <section className="mb-12 p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Core Ingredients</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Our products are crafted with carefully selected ingredients, including rare botanicals and organic extracts that offer deep hydration, rejuvenation, and nourishment for your skin.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li><strong>Vitamin E:</strong> Provides antioxidant protection and hydration.</li>
          <li><strong>Charcoal:</strong> Purifies and detoxifies the skin.</li>
          <li><strong>Neem:</strong> Known for its antibacterial and soothing properties.</li>
          {/* Add more ingredients as needed */}
        </ul>
      </section>

      {/* Founder’s Message */}
      <section className="mb-12 p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-blue-200">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">From the Founder</h2>
        <p className="text-lg leading-relaxed text-gray-800 italic">
        &quot;At Cerum, we believe that skincare should be simple, effective, and rooted in nature. Our mission is to provide products that make people feel good in their own skin, using the best that nature has to offer.&quot;
        </p>
      </section>

      {/* Sustainability Section */}
      <section className="mb-12 p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Our Commitment to Sustainability</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We are dedicated to creating skincare that is as gentle on the planet as it is on your skin. Cerum uses eco-friendly packaging, ethically-sourced ingredients, and strives to minimize our carbon footprint.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12 p-6 rounded-lg shadow-lg bg-blue-50">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">What Our Customers Say</h2>
        <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">
        &quot;Cerum&apos;s Vitamin-E serum transformed my skin! It feels softer, looks brighter, and has a beautiful natural glow.&quot; - Sarah M.
        </blockquote>
        <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">
        &quot;I love the commitment to sustainability, and my skin has never been happier!&quot; - Jamie L.
        </blockquote>
      </section>
    </div>
  );
};

export default About;
