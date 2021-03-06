// Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Styles
import styled from "styled-components";
import { BasicLayout, Description, Image, Hide } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Hidden>
      <Services
        animate={controls}
        initial="hidden"
        ref={element}
        variants={scrollReveal}
      >
        <Description>
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock icon" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm icon" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="money icon" />
                <h3>Affordabl</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork icon" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="camera" />
        </Image>
      </Services>
    </Hidden>
  );
};

const Services = styled(BasicLayout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      background: #fff;
      color: #000;
      padding: 1rem;
      margin-left: 1rem;
    }
  }
`;

const Hidden = styled.div`
  overflow: hidden;
`;

export default ServicesSection;
