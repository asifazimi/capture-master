// Images
import home1 from "../img/home1.png";
// Styled
import styled from "styled-components";
import { BasicLayout, Description, Image, Hide } from "../styles";
// React dom router
import { Link } from "react-router-dom";
// Framer Motion
import { motion } from "framer-motion";
import { aboutAnim, fade, photoAnim } from "../animation";
// Wave
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <BasicLayout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={aboutAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={aboutAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={aboutAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achive it.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with  a camera" />
      </Image>
      <Wave />
    </BasicLayout>
  );
};

export default AboutSection;
