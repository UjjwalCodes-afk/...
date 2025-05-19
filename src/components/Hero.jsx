import { motion } from 'framer-motion';
import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-900 text-white px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4">Kya hum ek baar phir baat kar sakte hain?</h1>
        <p className="text-xl leading-relaxed mt-4">
          Shreeya, aap meri zindagi mein kitni khaas ho,<br />
          jitna aapne mujhe special banaya, main kabhi bhool nahi sakta.<br /><br />

          Aapki har ek muskaan, har ek baat mere liye anmol thi.<br />
          Aapne woh ehsaas dilaya jo shayad main kabhi soch bhi nahi paya tha.<br /><br />

          <strong>Phir bhi, meri wajah se sab kuch waisa nahi raha jaisa hona chahiye tha.</strong><br />
          Jo kuch bhi aapne mehsoos kiya, uska dard main kabhi chhup nahi sakta.<br /><br />

          Lekin main badla hoon, har din seekh raha hoon.<br />
          Apne aap ko sudharne ki koshish kar raha hoon, sirf aapki izzat aur izhaar ke liye ,<br />
          and, ek behtar insaan banne ke liye.<br /><br />

          Shayad hum phir saath na ho paayein, par yeh sach hai —<br />
          aap meri zindagi ka sabse khoobsurat hissa rahi hain, aur hamesha rahengi.<br />
        </p>
      </motion.div>
    </section>
  );
}
