import home1 from "../img/home1.png";
// Styled
import styled from "styled-components";
import { BasicLayout, Description, Image, Hide } from "../styles";
// React dom router
import { Link } from "react-router-dom";
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        // when: "beforeChildren",
      },
    },
  };

  return (
    <BasicLayout>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achive it.
        </p>
        <Link to="/contact">
          <button>Contact us</button>
        </Link>
      </Description>
      <Image>
        <img src={home1} alt="guy with  a camera" />
      </Image>
    </BasicLayout>
  );
};

export default AboutSection;
