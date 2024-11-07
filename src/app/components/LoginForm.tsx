'use client'
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hide the login form and show the loading spinner
    const loginForm = document.getElementById('login-form') as HTMLElement;
    const spinnerContainer = document.getElementById('spinner-container') as HTMLElement;
    const mainContent = document.getElementById('main-content') as HTMLElement;

    loginForm.style.display = 'none';
    spinnerContainer.style.display = 'flex';

    // Simulate an API request or login process
    setTimeout(() => {
      spinnerContainer.style.display = 'none';
      mainContent.style.display = 'block';
      const heroText = document.querySelector('.hero-text h2') as HTMLElement;
      if (heroText) {
        heroText.textContent = `Welcome, ${name}!`;
      }
    }, 2000);
  };

  return (
    <div id="login-form" className="login-form mx-auto  max-w-sm bg-white/80 p-8 rounded-lg shadow-md text-center mt-[250px]">
      <h2 className="mb-4 text-2xl font-semibold">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mb-4 w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
