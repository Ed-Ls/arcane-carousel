import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function details({ key, name, surname, resume, health, mana, armor, attack }) {
  return (
    <main className="other">
      <motion.h1
        key={key}
        animate={{ x: 100, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.h1>
      <motion.h2
        key={key}
        animate={{ x: 100, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {surname}
      </motion.h2>

      <div className="resume">
        <motion.h3
          key={key}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Resume
        </motion.h3>
        <motion.p
          key={key}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="resume-text"
        >
          {resume}
        </motion.p>

        <motion.h3 key={key} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          Skills
        </motion.h3>

        <motion.div
          key={key}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="skills"
        >
          <div className="skills-1">
            <p>
              <span>Health: </span>
              {health}
            </p>
            <p>
              <span>Mana: </span>
              {mana}
            </p>
          </div>

          <div className="skills-2">
            <p>
              <span>Armor: </span>
              {armor}
            </p>
            <p>
              <span>Attack: </span>
              {attack}
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default details;
