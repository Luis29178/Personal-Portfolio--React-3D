import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../Constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w.full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] mac-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a highly skilled and dedicated software engineer with expertise in
        React, JavaScript, TypeScript, web development, CSS, and HTML. With a
        strong educational background in computer science and a passion for
        creating intuitive and visually appealing web applications, I have made
        significant contributions to various projects throughout my career. My
        experience in front-end development has given me a deep understanding of
        modern web technologies and frameworks. I have successfully leveraged my
        proficiency in React, JavaScript, and TypeScript to build interactive
        and responsive user interfaces. I pay close attention to detail and am
        committed to writing clean and efficient code, ensuring seamless user
        experiences and contributing to the overall success of the projects I
        work on. In addition to my technical skills, I excel in collaborating
        with cross-functional teams and thrive in a collaborative environment. I
        have a strong ability to communicate effectively, articulate ideas, and
        actively contribute to productive discussions. I am continuously
        learning and staying up-to-date with the latest industry trends, always
        eager to expand my knowledge and find innovative solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// component wrapper is applyed to the whole section
export default SectionWrapper(About, "about");
