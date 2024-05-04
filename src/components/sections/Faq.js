import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  color: ${(props) => props.theme.body};
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  width: 80%;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;
const Faq = () => {
  return (
    <Section id="Faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Card title=" What is Glebe?">
            Glebe is a platform that facilitates the tokenization of real-world
            assets, allowing users to convert physical assets such as real
            estate, art, or commodities into digital tokens on the blockchain
          </Card>
          <Card title="How does Glebe work?">
            Glebe leverages blockchain technology to tokenize assets,
            representing ownership rights as digital tokens. Users can buy,
            sell, and trade these tokens on the platform, providing liquidity
            and fractional ownership opportunities for a wide range of assets.
          </Card>
          <Card title="What are the benefits of asset tokenization?">
            Asset tokenization offers several benefits, including increased
            liquidity, fractional ownership opportunities, reduced transaction
            costs, enhanced transparency, and improved accessibility to
            investment opportunities traditionally reserved for institutional
            investors.
          </Card>
        </Box>
        <Box>
          <Card title="Is Glebe secure?">
            Yes, Glebe prioritizes security and employs industry best practices
            to safeguard user assets and data. Our platform utilizes advanced
            encryption techniques and smart contract audits to ensure the
            integrity and security of transactions.
          </Card>
          <Card title="What types of assets can be tokenized on Glebe?">
            Glebe supports the tokenization of a wide range of assets, including
            but not limited to real estate properties, fine art, collectibles,
            precious metals, commodities, and intellectual property rights. Our
            platform aims to democratize access to asset ownership and
            investment opportunities across various sectors.
          </Card>
          <Card title="How can I participate in asset tokenization on Glebe? ">
          To participate in asset tokenization on Glebe, simply connect your wallet. users can browse available assets, purchase tokens, and manage their investments through our user-friendly interface.
          </Card>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
