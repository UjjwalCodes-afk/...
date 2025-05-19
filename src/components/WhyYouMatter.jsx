import { motion } from 'framer-motion';
import React from 'react';

export default function WhyYouMatter() {
  return (
    <section className="py-16 bg-black text-white text-center px-4">
      <motion.h2 
        className="text-4xl font-bold mb-6" 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
      >
        Aap Itne Special Kyun Hai Mere Liye
      </motion.h2>
      <motion.p 
        className="max-w-xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Aap hansi meri duniya thi... jab Aap haste the na, saari problems chhoti lagti thi.<br /><br />
        Aapka aana meri zindgi me khushio ke aana tha mai aaj b aapki snaps dekhke smile krta hu and miss b kaafi krta hu puraani chats ko dekh ke.
        Aap sirf meri zindagi mein aayi nahi the, jb aap meri life me aaye us se pehle to mai jeera tha but jb aap aaye aapne mujhe khushio ke sth jeena sikhaya<br />
        but yr mai kitna pagal hu mere se ye khushiyan b smbhali ni gyi aur baad me realize hua ki aap hi meri khushiyan ho!
        aap woh the jo meri baaton ke peeche chhupi feelings samajh lete thi — bina kahe.<br /><br />
        Maine kabhi express nahi kiya, par har roz aapko dekh kar lagta tha — yaar, kaise kisi mein itna pyaar ho sakta hai?<br />
        Aur jab aap door gayi... tab samjha ki aap meri zindagi ka sabse khoobsurat hissa thi, hai... aur hamesha rahoge.
      </motion.p>
    </section>
  );
}
