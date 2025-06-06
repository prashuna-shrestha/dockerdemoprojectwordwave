"use client";
import { motion } from "framer-motion";
import { Rocket, BookOpenText, UsersRound, PenSquare, Sparkles, Bookmark, Globe, HeartHandshake, Lightbulb, BookText } from "lucide-react";
import Footer from "@/components/Footer";

export default function About() {
  const values = [
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Community First",
      description: "We prioritize building genuine connections between writers and readers"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity Unleashed",
      description: "Our platform is designed to spark inspiration and remove creative blocks"
    },
    {
      icon: <BookText className="w-8 h-8" />,
      title: "Quality Content",
      description: "We maintain high standards while welcoming diverse voices"
    }
  ];

  const team = [
    { name: "Prashuna Shrestha", role: "Backend Developer", expertise: "Brings structure to systems with full-stack expertise—quietly crafting the logic that powers our platform." },
    { name: "Pratima Singh", role: "Frontend Developer", expertise: "Transforms ideas into beautiful, user-friendly interfaces while building community through creativity." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: Math.random() * 100,
                  x: Math.random() * 1000,
                  rotate: Math.random() * 360
                }}
                animate={{
                  y: [0, 100, 0],
                  x: [Math.random() * 100, Math.random() * 1000],
                  rotate: [0, Math.random() * 180]
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className={`absolute rounded-full opacity-20 ${i % 4 === 0 ? 'bg-indigo-200' : i % 3 === 0 ? 'bg-blue-200' : i % 2 === 0 ? 'bg-pink-200' : 'bg-purple-200'}`}
                style={{
                  width: Math.random() * 150 + 50,
                  height: Math.random() * 150 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center justify-center">
                  <BookOpenText className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-indigo-600">Our Story</span>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Words</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate project born from the love of storytelling and community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Built WordWave</h2>
              <p className="text-lg text-gray-600 mb-6">
                WordWave started as a simple idea: to create a welcoming space where writers of all levels could share their work without barriers. 
                We noticed how intimidating many writing platforms could be, and wanted to build something different.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our focus is on fostering creativity, providing thoughtful feedback, and helping writers grow - not just collecting content.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {values.map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white to-indigo-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-pink-100 rounded-lg flex items-center justify-center mb-3">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Right Side Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-pink-50 border-8 border-white shadow-xl"
            >
              {/* Animated floating books */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    y: Math.random() * 100,
                    x: Math.random() * 100,
                    rotate: Math.random() * 20 - 10
                  }}
                  animate={{
                    y: [0, Math.random() * 40 - 20],
                    x: [0, Math.random() * 40 - 20],
                    rotate: [0, Math.random() * 20 - 10]
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className={`absolute ${i === 0 ? 'top-10 left-10' : i === 1 ? 'top-1/4 right-20' : i === 2 ? 'bottom-20 left-20' : i === 3 ? 'top-1/3 left-1/3' : 'bottom-10 right-10'} bg-white p-2 rounded shadow-md`}
                  style={{
                    width: `${Math.random() * 40 + 40}px`,
                    height: `${Math.random() * 60 + 40}px`,
                    transformOrigin: 'center'
                  }}
                >
                  <div className={`w-full h-full ${i % 3 === 0 ? 'bg-indigo-100' : i % 2 === 0 ? 'bg-pink-100' : 'bg-purple-100'} rounded-sm flex items-center justify-center`}>
                    <BookOpenText className={`w-6 h-6 ${i % 3 === 0 ? 'text-indigo-600' : i % 2 === 0 ? 'text-pink-600' : 'text-purple-600'}`} />
                  </div>
                </motion.div>
              ))}

              {/* Central interactive element */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 2, -2, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full max-w-md border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center mt-1">
                      <PenSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Promise</h3>
                      <p className="text-gray-700">
                        We'll never prioritize algorithms over people. Your writing journey matters more than vanity metrics.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We're Building WordWave
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Transparency about our process and priorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Current Focus",
                icon: <Rocket className="w-8 h-8 text-indigo-600" />,
                items: [
                  "Improving feedback tools",
                  "Building better discovery",
                  "Mobile experience",
                  "Accessibility features"
                ]
              },
              {
                title: "Coming Soon",
                icon: <Sparkles className="w-8 h-8 text-pink-600" />,
                items: [
                  "Writing workshops",
                  "Themed challenges",
                  "Author spotlights",
                  "Reading lists"
                ]
              },
              {
                title: "Long-term Vision",
                icon: <Globe className="w-8 h-8 text-purple-600" />,
                items: [
                  "Multilingual support",
                  "Collaborative writing",
                  "Audio stories",
                  "Writer mentorship"
                ]
              }
            ].map((column, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 ${i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-pink-500' : 'bg-purple-500'}`}></div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 relative z-10">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-sm flex items-center justify-center">
                    {column.icon}
                  </span>
                  {column.title}
                </h3>
                <ul className="space-y-3 relative z-10">
                  {column.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <span className={`mt-1 ${i === 0 ? 'text-indigo-500' : i === 1 ? 'text-pink-500' : 'text-purple-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Team Details (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6"
            >
              The People Powering the Platform
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10 text-lg text-gray-600 max-w-2xl"
            >
              A small team with big dreams for the writing community. We're passionate about blending technology and creativity.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 shadow-md border border-gray-100 transition-transform relative overflow-hidden"
                >
                  {/* Decorative background */}
                  <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 ${i === 0 ? 'bg-indigo-500' : 'bg-pink-500'}`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                    <p className="text-gray-700 mt-2">{member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Visual (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full w-full flex justify-center items-center"
          >
            <div className="relative w-full max-w-md h-96">
              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {[...Array(8)].map((_, i) => (
                  <motion.path
                    key={i}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    d={`M${Math.random() * 400},${Math.random() * 400} Q${Math.random() * 400},${Math.random() * 400} ${Math.random() * 400},${Math.random() * 400}`}
                    stroke={i % 3 === 0 ? "#6366f1" : i % 2 === 0 ? "#ec4899" : "#8b5cf6"}
                    strokeWidth="1.5"
                    fill="none"
                  />
                ))}
              </svg>

              {/* Floating team avatars */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    y: Math.random() * 100 - 50,
                    x: Math.random() * 100 - 50,
                    scale: 0.8
                  }}
                  animate={{
                    y: [0, Math.random() * 40 - 20],
                    x: [0, Math.random() * 40 - 20],
                    rotate: [0, Math.random() * 10 - 5]
                  }}
                  transition={{
                    duration: Math.random() * 8 + 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className={`absolute ${i === 0 ? 'top-20 left-20' : i === 1 ? 'bottom-20 right-20' : 'top-1/2 left-1/2'} w-24 h-24 rounded-full bg-gradient-to-br ${i === 0 ? 'from-indigo-100 to-blue-100' : i === 1 ? 'from-pink-100 to-purple-100' : 'from-yellow-100 to-orange-100'} shadow-lg flex items-center justify-center border-4 border-white`}
                >
                  <UsersRound className={`w-10 h-10 ${i === 0 ? 'text-indigo-600' : i === 1 ? 'text-pink-600' : 'text-yellow-600'}`} />
                </motion.div>
              ))}

              {/* Central visual */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-100 to-pink-100 shadow-xl border-8 border-white flex items-center justify-center">
                  <div className="text-center p-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm"
                    >
                      <Sparkles className="w-8 h-8 text-indigo-600" />
                    </motion.div>
                    <h3 className="font-bold text-gray-800">Our Team</h3>
                    <p className="text-sm text-gray-600 mt-1">Passionate creators</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}