import { motion } from 'framer-motion';
import React from 'react';
const mistakes = [
  "I didn’t listen like I should have.",
  "I was immature with my emotions.",
  "I let ego get in the way of love.",
];

export default function Mistakes() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Past Mistakes
        </motion.h2>
        <div className="space-y-4">
          {mistakes.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 p-4 rounded-xl shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
