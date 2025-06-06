'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, PencilLine } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginForm() {
  const router = useRouter();

  // State to hold URLSearchParams after client-side mount
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [hasRedirected, setHasRedirected] = useState(false);

  // Initialize client status and searchParams on mount only
  useEffect(() => {
    setIsClient(true);
    setSearchParams(new URLSearchParams(window.location.search));
  }, []);

  // Handle redirect if token exists and no redirect happened yet
  useEffect(() => {
    if (!isClient || !searchParams) return;

    if (!hasRedirected && localStorage.getItem('token')) {
      const fromSignup = searchParams.get('fromSignup') === 'true';
      if (!fromSignup) {
        const redirectTo = searchParams.get('redirect') || '/write';
        router.push(redirectTo);
        setHasRedirected(true);
      }
    }
  }, [isClient, searchParams, hasRedirected, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || data.error || 'Login failed');
      }

      localStorage.setItem('token', data.access);
      localStorage.setItem('refreshToken', data.refresh);

      const userData = {
        id: data.user.id.toString(),
        name: data.user.full_name || data.user.username || data.user.email.split('@')[0],
        email: data.user.email,
      };
      localStorage.setItem('userData', JSON.stringify(userData));

      const redirectTo = searchParams?.get('redirect') || '/write';
      window.location.href = redirectTo;
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient || !searchParams) {
    // Show loader or blank screen while client only stuff initializes
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  const redirectParam = searchParams.get('redirect');
  const signupHref = redirectParam
    ? `/signup?redirect=${encodeURIComponent(redirectParam)}`
    : '/signup';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: Math.random() * 100 }}
              animate={{
                y: [0, 50, 0],
                x: [Math.random() * 100, Math.random() * 100],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className={`absolute rounded-full opacity-20 ${
                i % 3 === 0 ? 'bg-indigo-200' : i % 2 === 0 ? 'bg-blue-200' : 'bg-pink-200'
              }`}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
              }}
            />
          ))}
        </div>

        {/* Login form container */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center justify-center">
                <PencilLine className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                Welcome Back
              </h1>
            </motion.div>
            <p className="text-gray-600">Log in to continue your writing journey</p>
          </div>

          {/* Error message */}
          {error && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </motion.div>
          )}

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={8}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging In...
                </span>
              ) : (
                'Log In'
              )}
            </motion.button>
          </form>

          {/* Sign up link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href={signupHref} className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
