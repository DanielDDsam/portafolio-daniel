import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const animatedTextRef = useRef(null);

  const animatedTextVariants = {
    initial: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const skills = [
    {
      title: "React",
      description:
        "Desarrollo de aplicaciones web modernas y eficientes utilizando ReactJS."
    },
    {
      title: "JavaScript",
      description:
        "Amplia experiencia en el desarrollo de aplicaciones y sitios web utilizando JavaScript."
    },
    {
      title: "UI/UX",
      description:
        "Diseño y desarrollo de interfaces de usuario atractivas, intuitivas y fáciles de usar."
    }
  ];

  return (
    <div>
      <section className="intro">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Soy Daniel, Frontend Developer
        </motion.h1>
      </section>

      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "visible" : "initial"}
        exit="exit"
        variants={animatedTextVariants}
      >
        <AnimatedText text="Skills" skills={skills} />
      </motion.div>
    </div>
  );
};

const AnimatedText = ({ text, skills }) => {
  return (
    <div>
      <section className="skills">
        <motion.div>
          <motion.h2>{text}</motion.h2>
          <motion.div
            className="cards-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
