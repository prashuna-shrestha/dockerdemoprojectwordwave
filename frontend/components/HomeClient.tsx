'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { Typewriter } from "react-simple-typewriter";
import { PenTool, BookOpen, Users, TrendingUp, Sparkles, PencilLine } from "lucide-react";

// Background animation
const BackgroundElements = () => {
  const elements = Array.from({ length: 15 }, (_, i) => {
    const width = 50 + (i * 7.3) % 100;
    const height = 50 + (i * 11.7) % 100;
    const x = (i * 53.2) % 1000;
    const color = i % 3 === 0 ? 'bg-indigo-200' : i % 2 === 0 ? 'bg-blue-200' : 'bg-pink-200';

    return {
      width,
      height,
      x,
      color,
      key: i
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.key}
          initial={{ y: 0, x: el.x }}
          animate={{
            y: [0, 100, 0],
            x: [el.x, (el.x + 200) % 1000]
          }}
          transition={{
            duration: 10 + (el.key * 0.7),
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={`absolute rounded-full opacity-20 ${el.color}`}
          style={{
            width: `${el.width}px`,
            height: `${el.height}px`
          }}
        />
      ))}
    </div>
  );
};

export default function HomeClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleWriteClick = (e: React.MouseEvent, href: string) => {
    if (!isLoggedIn) {
      e.preventDefault();
      const redirect = searchParams.get('redirect') || '/write';
      router.push(`/login?redirect=${encodeURIComponent(redirect)}`);
    }
  };

  const features = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Write Beautifully",
      description: "Our intuitive editor helps you focus on what matters - your words.",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Read Freely",
      description: "Discover amazing stories from our growing community.",
      color: "from-purple-500 to-purple-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect Deeply",
      description: "Engage with readers and writers who share your passions.",
      color: "from-pink-500 to-pink-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Grow Together",
      description: "Get feedback and watch your skills improve.",
      color: "from-indigo-500 to-indigo-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
          {isClient && <BackgroundElements />}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center justify-center">
                  <PencilLine className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-indigo-600">Welcome to WordWave</span>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Where words come to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                <Typewriter
                  words={["life", "play", "shine", "inspire"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              A vibrant community for writers and readers to create, share, and discover
              compelling stories.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={isLoggedIn ? "/write" : "/login"}
                  onClick={(e) => handleWriteClick(e, "/write")}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Start Writing Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/blog"
                  className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Explore Stories
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 mx-auto max-w-4xl"
          >
            <div className="relative h-96 w-full rounded-2xl bg-gradient-to-br from-indigo-100 to-pink-100 shadow-xl overflow-hidden border border-white/20">
              {/* Notebook illustration */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
