"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Headphones, LifeBuoy, HelpCircle, PenTool, BookOpen, Feather } from "lucide-react";
import Footer from "@/components/Footer";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "For general inquiries and support",
      value: "prashunashrestha01@gmail.com, pratimasingh0525@gmail.com",
      action: "Send Email",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Customer Care",
      description: "Mon to Fri, 9AM - 5PM",
      value: "9864111755, 9803257815",
      action: "Call Us",
      color: "from-purple-500 to-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: Math.random() * 1000 }}
              animate={{
                y: [0, 150, 0],
                x: [Math.random() * 100, Math.random() * 1000]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`absolute rounded-full ${i % 3 === 0 ? 'bg-indigo-300' : i % 2 === 0 ? 'bg-blue-300' : 'bg-pink-300'}`}
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-28 sm:py-32 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
            >
              We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Here to Help</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              Whether you need assistance or have feedback, our team is ready to connect with you. Choose a contact option that suits you best.
            </motion.p>
          </div>

          {/* New right side visual - Blog-themed illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Stack of blog cards */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                {/* Card 1 (Back) */}
                <div className="absolute w-48 h-64 bg-white shadow-lg rounded-lg transform rotate-2 -translate-x-2 translate-y-4">
                  <div className="h-3 bg-gradient-to-r from-blue-400 to-blue-300 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded mb-1 w-full"></div>
                    <div className="h-3 bg-gray-100 rounded mb-1 w-5/6"></div>
                  </div>
                </div>
                
                {/* Card 2 (Middle) */}
                <div className="absolute w-48 h-64 bg-white shadow-xl rounded-lg transform -rotate-1 translate-x-4 translate-y-8">
                  <div className="h-3 bg-gradient-to-r from-purple-400 to-purple-300 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded mb-1 w-full"></div>
                    <div className="h-3 bg-gray-100 rounded mb-1 w-5/6"></div>
                  </div>
                </div>
                
                {/* Card 3 (Front) */}
                <div className="absolute w-48 h-64 bg-white shadow-2xl rounded-lg transform rotate-1 translate-x-8 translate-y-12">
                  <div className="h-3 bg-gradient-to-r from-pink-400 to-pink-300 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded mb-1 w-full"></div>
                    <div className="h-3 bg-gray-100 rounded mb-1 w-5/6"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <PenTool className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating blog elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 right-0 bg-white p-3 rounded-lg shadow-md z-10 flex items-center"
              >
                <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium">Blog Support</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-0 bg-indigo-100 p-2 rounded-full shadow-md z-10"
              >
                <Feather className="w-6 h-6 text-indigo-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.8, delay: i * 0.3 }}
                  className={`absolute -right-10 -bottom-10 w-44 h-44 bg-gradient-to-r ${method.color} rounded-full`}
                />
                <div className="relative z-10 flex items-start gap-5">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    {method.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                    <p className="text-indigo-600 font-medium text-sm">{method.value}</p>
                    <motion.a
                      href={
                        method.title.includes("Email")
                          ? `mailto:${method.value.split(',')[0].trim()}`
                          : `tel:${method.value.replace(/\D/g, '')}`
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-3 text-sm font-semibold bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                    >
                      {method.action}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SUPPORT FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              What You Can Expect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mt-3 max-w-2xl mx-auto"
            >
              Our team is committed to providing quick and meaningful support at every step.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "Quick Responses",
                description: "Average reply time under 4 hours during business days"
              },
              {
                icon: <Headphones className="w-5 h-5" />,
                title: "Knowledgeable Team",
                description: "Our staff is trained to assist with real-world issues"
              },
              {
                icon: <LifeBuoy className="w-5 h-5" />,
                title: "Helpful Solutions",
                description: "We focus on resolving your concerns, not just replying"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SUPPORT TIMELINE */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Our Support Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mt-3 max-w-2xl mx-auto"
            >
              Simple steps to get the help you need
            </motion.p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            {[
              {
                title: "Reach Out",
                description: "Contact us through any channel",
                icon: <Mail className="w-5 h-5" />
              },
              {
                title: "Quick Response",
                description: "We'll acknowledge your request immediately",
                icon: <MessageSquare className="w-5 h-5" />
              },
              {
                title: "Solution Provided",
                description: "Our team works to resolve your issue",
                icon: <LifeBuoy className="w-5 h-5" />
              },
              {
                title: "Follow Up",
                description: "We ensure you're completely satisfied",
                icon: <Headphones className="w-5 h-5" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-8 ${i % 2 === 0 ? 'pr-8 text-right left-0' : 'pl-8 text-left right-0'}`}
              >
                <div className={`absolute top-4 ${i % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white z-10`}>
                  {item.icon}
                </div>
                <div className={`p-6 rounded-xl bg-white shadow-sm border border-gray-100 ${i % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}