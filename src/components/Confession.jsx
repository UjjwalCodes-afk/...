import { motion } from 'framer-motion';
import React from 'react';

export default function Confession() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white text-center px-4">
      <motion.h2 
        className="text-3xl md:text-5xl font-extrabold mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Sach Yeh Hai…
      </motion.h2>
      <motion.p 
        className="text-xl max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Main roz aapko yaad karta hoon. Kabhi kisi lamhe mein, kabhi kisi khamoshi mein.<br /><br />
        Galti meri thi, par ehsaas poora dil se hai. Main badal gaya hoon — sirf isliye nahi ki maine khud ko kho diya, <br /> balki isliye kyunki maine aapko kho diya.<br /><br />
        Agar zindagi phir se ek mauka de, sirf 1% bhi... toh main apna 100% nahi, apna poora dil rakh dunga aapke saamne.<br /><br />
        
        Shreeya, main sirf vaade nahi karta, main aapko haasil karne ki koshish karunga,  
        apni har ek saans, apni har ek koshish aapke liye laga dunga.<br />
        Aap meri zindagi ka woh hissa hain jise main kabhi khona nahi chahta.<br /><br />

        Main aapke bharose ka haqdar banunga, aur apne har action se yeh sabit kar dunga ki aap meri sabse badi taakat hain.<br />
        Aapki muskaan mein meri khushi hai, aur aapke saath hi meri manzil.<br />
        Main yeh safar akela nahi, balki aapke saath chalna chahta hoon — har kadam, har mod par.
        Aapka bharosa jeetne ka sbse pehle kadam hai

        Insta - ujjwalnagpal3 
        pass - Shreeya#28jan

        Snap - ujjwallnagpal
        pass - Ujjwal990
        <br />
      </motion.p>
    </section>
  );
}
