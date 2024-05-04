import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Draw from "../Draw";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    display: 80%;
  }

  @media (max-width: 48em) {
    display: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    display: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const RoadmapItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`;
const Box = styled.p`
  color: ${(props) => props.theme.text};
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
display: block;
font-size: ${(props) => props.theme.fontsm};
text-transform: capitalize;
color: ${(props) => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxs};
   \
}
`;

const RoadmapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <RoadmapItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </RoadmapItemContainer>
    </Item>
  );
};
const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center += 200px",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {};
  }, []);
  return (
    <Section id="roadmap">
      <Title>RoadMap</Title>
      <Container>
        <SvgContainer>
          <Draw />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadmapItem
            addToRef={addToRefs}
            title="Asset Listing Launch 🚀"
            subtext="The Glebe platform will officially launch for asset listing on June 15, 2024."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="Asset Expansion 📈"
            subtext="Prepare for a major expansion as we introduce a diverse range of new assets to our platform, set to launch in the fourth quarter of 2024."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="Launch Of Premium Features 🌟"
            subtext="Exclusive features for asset owners and investors will be rolled out starting from January 2025."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="Merchandise Release 👕"
            subtext="Glebe-branded merchandise will be available for purchase, starting from April 1, 2025."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="Integration with the Metaverse 🌐"
            subtext="Our platform will integrate with virtual reality environments, providing a futuristic asset exploration experience."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
