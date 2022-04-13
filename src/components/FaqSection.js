import React, { useState } from "react";
// Styles
import styled from "styled-components";
import { BasicLayout, Description, Image, Hide } from "../styles";
// Toggle Component
import Toggle from "./Toggle";
// Animation
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Hidden>
      <Faq
        animate={controls}
        initial="hidden"
        ref={element}
        variants={scrollReveal}
      >
        <h2>
          Any Question <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, quam.
              </p>
            </div>
          </Toggle>
          <Toggle title="Diffrent Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, quam.
              </p>
            </div>
          </Toggle>
          <Toggle title="What Products do you offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, quam.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </Hidden>
  );
};

const Faq = styled(BasicLayout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

const Hidden = styled.div`
  overflow: hidden;
`;

export default FaqSection;
