"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const randomSeed = Math.floor(Math.random() * 1000);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?seed=${randomSeed}&width=512&height=512&nologo=True`;

    const response = await fetch(url);

    if (response.ok) {
      setImageURL(url);
      setLoading(false);
    } else {
      alert("Error fetching image");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 dark:from-zinc-950 dark:to-gray-900 transition-all">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent">
        <Link href="/">
          <Button className="bg-red-500 text-bold">
            Back
          </Button>
        </Link>
        <ModeToggle/>
      </header>

      {/* Main Content */}
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        AI Image Generator
      </motion.h1>

      {/* Input and Button */}
      <motion.form
        className="w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          className="w-full px-4 py-2 text-lg text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <motion.button
          type="submit"
          className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Image
        </motion.button>
      </motion.form>

      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className="mt-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Generating Image...
        </motion.div>
      )}

      {/* Display Image */}
      {imageURL && !loading && (
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={imageURL}
            alt="Generated AI Image"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
}
