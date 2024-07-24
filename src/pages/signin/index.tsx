// components/SignInForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import router from 'next/router';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/demo/signIn', {
        email,
        password,
      });

      // Assuming the response data contains the token and message
      const { token, message } = response.data;

      // Store token in local storage
      localStorage.setItem('token', token);

      // Store token in cookies
      Cookies.set('token', token, { expires: 7 }); // Token will expire in 7 days

      // Set the success message
      setMessage(message);
      router.push("/home");
    } catch (error) {
      setError('Failed to sign in. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
        {message && <p className="text-white mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default SignInForm;
