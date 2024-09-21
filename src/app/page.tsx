"use client"
import { ModeToggle } from "@/components/ui/modeToggle";
import Head from "next/head";
import {motion}  from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imagica - AI Image Generator</title>
        <meta name="description" content="Generate stunning images with AI" />
      </Head>

      <div className="min-h-screen bg-zinc-950 dark:bg-white transition-all">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold text-white dark:text-black">Imagica</h1>
          <ModeToggle />
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center mt-20 space-y-6">
          <motion.h2
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:text-black"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Create Stunning Images with AI
          </motion.h2>
          <p className="text-lg text-gray-400 dark:text-gray-600">
            Use our advanced AI technology to bring your imagination to life.
          </p>
          <motion.button
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </section>

        {/* Features Section */}
        <section className="mt-32 px-8 text-center">
          <h3 className="text-4xl font-bold text-white dark:text-black mb-10">
            Why Imagica?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI-Powered", desc: "Leverage cutting-edge AI to generate high-quality images." },
              { title: "Fast and Efficient", desc: "Get your images quickly without compromising quality." },
              { title: "Customizable", desc: "Adjust settings to match your artistic vision." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-2xl font-bold text-white dark:text-black">{feature.title}</h4>
                <p className="mt-2 text-gray-400 dark:text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 py-10 bg-zinc-900 dark:bg-zinc-100 text-center text-gray-400 dark:text-gray-600">
          <p>© 2024 Imagica. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
