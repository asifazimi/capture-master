// Styles
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The athlete </h2>
        <div className="line"></div>
        <Link to="/">
          <img src={athlete} alt="Image" />
        </Link>
      </Movie>
      <Movie>
        <h2>The theracer </h2>
        <div className="line"></div>
        <Link to="/">
          <img src={theracer} alt="Image" />
        </Link>
      </Movie>
      <Movie>
        <h2>The goodtimes </h2>
        <div className="line"></div>
        <Link to="/">
          <img src={goodtimes} alt="Image" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
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
    background: #cccccc;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;