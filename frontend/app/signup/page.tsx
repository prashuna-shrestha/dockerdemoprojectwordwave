'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, UserPlus, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignupForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ full_name: fullName, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || data.error || 'Signup failed');
      }

      setSuccess(true);
      router.push(`/login?fromSignup=true`);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: Math.random() * 100 }}
              animate={{ y: [0, 50, 0], x: [Math.random() * 100, Math.random() * 100] }}
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

        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden p-8">
          <div className="text-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
                Create an Account
              </h1>
            </motion.div>
            <p className="text-gray-600">Sign up to start your writing journey</p>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
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

            <div>
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
