import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Wande from '../../assets/bighead.png'
import Confett from "../Confetti";


const Section = styled.section`

min-height: 100vh;
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};

`
const Title = styled.h2`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};
   }
`;
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
  width: 80%;
 }

 @media (max-width: 48em){
    width: 90%;
    justify-content: center;
   }
`
const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
z-index: 5px:
backdrop-filter: blur(4px);
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
border: 2px solid ${props => props.theme.text};
border-radius: 20px;


&:hover{
    img{
        transform: translateY(-2 rem) scale(1.2);
    }
}
@media (max-width: 30em){
    width: 70vw;
   }
`
const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
border-radius: 20px;
cursor: pointer;
padding: 1rem;

img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}
a{
    text-decoration: none;
}
`
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.p`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight: 400;

`

const Founder = ({img, name =" ", position=""})=>{

    return(
        <Item>
            <ImageContainer>
               <a href="https://twitter.com/wandeoki" target="_blank" rel="nonreferrer"> <img src={img} alt={name}/> </a> 
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    )
}

const Team = () =>{

    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=>{
        let element = ref.current;

        ScrollTrigger.create({

            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        })
        return () => {
            ScrollTrigger.kill();
        }
    }, [])
    return (
       <Section ref={ref} id="team">
        <Confett/>
        <Title>
            Team
        </Title>
        <Container>
            <Founder img={Wande} name ="Dayo" position="Founder"/>
        </Container>
       </Section>
    )
}

export default Team;