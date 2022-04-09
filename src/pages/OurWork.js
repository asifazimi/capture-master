// Styles
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animation
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";

const OurWork = () => {
  return (
    <Work
      // style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Movie>
        <motion.h2 variants={fade}>The athlete </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="Image" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2>The theracer </motion.h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="Image" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2>The goodtimes </motion.h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Image" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
    color: #cccccc;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    margin-bottom: 3rem;
    background: #23d997;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;
