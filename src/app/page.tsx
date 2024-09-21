"use client";

import { ModeToggle } from "@/components/ui/modeToggle";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imagica - AI Image Generator</title>
        <meta name="description" content="Generate stunning images with AI" />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white dark:bg-black dark:bg-gray-850 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Imagica</h1>
          <ModeToggle />
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center mt-20 space-y-6">
          <motion.h2
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 dark:from-blue-300 dark:to-teal-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Create Stunning Images with AI
          </motion.h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
            Use our advanced AI technology to bring your imagination to life.
          </p>
          <Link href="/create">
            <motion.button
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="mt-32 px-8 text-center">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
            Why Choose Imagica?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI-Powered", desc: "Leverage cutting-edge AI to generate high-quality images." },
              { title: "Fast and Efficient", desc: "Get your images quickly without compromising quality." },
              { title: "Customizable", desc: "Adjust settings to match your artistic vision." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white">{feature.title}</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
