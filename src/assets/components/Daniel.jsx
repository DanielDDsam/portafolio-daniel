import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {React, useEffect,useLayoutEffect} from "react"
import daniel from "../../daniel.png"
import Decoracion from "./Decoracion"

const DanielPortfolio = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  return (
    <div className="portafolio-container">
      <section className="portafolio-aboutMe">
        <div className="portafolio-header">
        
          <Decoracion/>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.5,delay: 0.3 }}
          >
            Frontend Developer.
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 10 }}
          
          transition={{ duration: 0.5,delay: 0.5 }}
          className="portafolio-description"
          >Me gustan los desafíos y aprender constantemente sobre el mundo del frontend. </motion.p>
          <div className="portafolio-description-frame">
            <p>Aun soy novato pero pero tengo la capacidad de crear grandes cosas. <br /> Energía tengo de sobra.</p>
            <p>En cada proyecto, quiero lograr que el usuario tenga una experiancia grata al interactuar con mis creaciones.</p>
          </div>
          <div 
          
          className="portafolio-img-frame"> </div>
          <motion.div 
            initial={{ opacity: 1, y: 0, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0}}
            className="portafolio-img-container">
             <img
            alt="Daniel" src={daniel} className="portafolio-img"></img>
          </motion.div>
          
        </div>
       
      </section>
        <section className="portafolio-skills">
        



          HOLA
        </section>
      <section>
        
      </section>
    </div>
  );
};

export default DanielPortfolio;
