import { motion } from 'framer-motion';
import React from 'react';
const changes = [
  "Started journaling to control emotions.",
  "Rebuilt my relationship with family.",
  "Working on a passion project to help others.",
];

export default function ChangeProof() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.h2 className="text-4xl font-bold mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          I'm Changed — And Here's Proof
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {changes.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white/10 p-6 rounded-xl shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
