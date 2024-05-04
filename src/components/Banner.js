import React from "react";
import styled from "styled-components";
import img from '../assets/dyr.jpg'
import img1 from '../assets/tqa.jpg'
import img2 from '../assets/tqw.jpg'
import img3 from '../assets/etw.jpg'
import Button from "./Button";

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.body};
border-top: 2px solid ${props => props.theme.body};

background-color: ${props => `rgba(${props.theme.textRgba}, 0.95)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

@media (max-width: 48em){
   height: 15rem;
   flex-direction: column;
   }

  `

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
    width: 15rem;
    height: auto;
}

@media (max-width: 48em){
    img{
        width: 10rem;
        height: auto;
    }
    }
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index: 10;
width: 35%;
text-transform: capitalize;

text-shadow: 1px 1px 2px ${props => props.theme.body};
@media (max-width: 64em){
    font-size: ${props => props.theme.fontxxl};
    text-align: center;
   width: 40%;
    }

    @media (max-width: 48em){
        font-size: ${props => props.theme.fontxl};
        padding: 2rem 0;
       width: 100%;
        }
`

const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;

@media (max-width: 48em){
   justify-content: center;
   width: 100%;
    }
`
const JoinBtn = styled.button`

display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
outline: none;
border: none;
font-weight: 600;
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

@media (max-width: 48em){
    
    padding: 1rem 2rem ;

    }

    @media (max-width: 30em){
    
        padding: 1rem 2rem;
        font-size: ${props => props.theme.fontsm};
    
        }

&:hover{
transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;

}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3 rem;

}
`
const Banner = () =>{ 

    return(
        <Section>
            <ImgContainer>
                <img src={img} alt="Monar" />
                <img src={img1} alt="Monar" />
                <img src={img2} alt="Monar" />
                <img src={img3} alt="Monar" />
                <img src={img2} alt="Monar" />
                <img src={img3} alt="Monar" />
            </ImgContainer>
            <Title>Join The <br/> Community Today</Title>
            <BtnContainer>
            <JoinBtn>Join Now </JoinBtn>
            </BtnContainer>
            
        </Section>
    )
}


export default Banner;