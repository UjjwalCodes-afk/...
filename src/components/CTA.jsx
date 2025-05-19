import { motion } from 'framer-motion';
import React from 'react';
export default function CTA() {
  return (
    <section className="py-16 bg-black text-white text-center">
      <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Your Call.
      </motion.h2>
      <div className="space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-green-500 px-6 py-3 rounded-full font-semibold"
        >
          Let’s Talk 💬
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-red-500 px-6 py-3 rounded-full font-semibold"
        >
          Not Now 🙁
        </motion.button>
      </div>
    </section>
  );
}
