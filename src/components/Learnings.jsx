import { motion } from 'framer-motion';
import React from 'react';

const lessons = [
    "Galti sirf ek pal ki hoti hai, par uska ehsaas zindagi bhar ka ho sakta hai.",
    "Sach bolna mushkil hota hai, lekin vishwas tootne se zyada dard kuch nahi hota.",
    "Apni baat chupane se zyada dard hota hai jab saamne wali ko sachai ka pata nahi chalta.",
    "Jab kisi ki feelings ko samjha nahi jata, toh rishte toot jaate hain.",
    "Respect sirf samne nahi, peeth piche bhi dikhani chahiye.",
    "Kabhi kabhi chup rehna bhi dard ka izhaar hota hai — bas mujhe us dard ko samajhne ki koshish karni chahiye thi.",
  ];
  

export default function Learnings() {
  return (
    <section className="py-16 bg-gradient-to-tr from-sky-900 to-indigo-900 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
        >
          Jo Maine Seekha Hai
        </motion.h2>
        <ul className="space-y-4 text-lg">
          {lessons.map((lesson, index) => (
            <motion.li 
              key={index} 
              className="bg-white/10 p-4 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {lesson}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
