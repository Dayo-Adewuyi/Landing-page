import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import { dark } from "../../styles/Themes";
import PIC from "../../assets/tqa.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-image: url(${PIC});
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 70em) {
    .mobile {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`;

const Subtext = styled.p`
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

const SubtextLight = styled.p`
  font-size: ${props => props.theme.md};
  text-transform: capitalize;
  width: 80%;
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  margin: 1rem auto;
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Title>Welcome to Glebe</Title>
          <Subtext>
            Glebe is a revolutionary platform for tokenizing real-world assets,
            enabling you to invest in tangible assets securely.
          </Subtext>
          <SubtextLight>
            Say goodbye to traditional investment barriers and embrace the
            future of asset tokenization. Click on the button below to start
            your investment journey.
          </SubtextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="Open App" link="https://github.com" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
