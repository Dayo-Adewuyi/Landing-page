import React from "react";
import Banner from "../Banner";
import styled from "styled-components";
import Logo from '../Logo'
import Facebook from '../../Icons/Facebook'
import Instagram from '../../Icons/Instagram'
import Twitter from '../../Icons/Twitter'
import Linkedln from '../../Icons/LinkedIn'


const Section = styled.section`

min-height: 100vh;
height: 100vh;
width: 100vw;
position: relative;
display: flex;


flex-direction: column;
color: ${props => props.theme.body};
`

const Container = styled.div`
width: 75%;
margin: 0.1rem auto;
display: flex;
justify-content: space-between;
align-items: center;
background-color:${props => props.theme.body}; 

border-bottom: 1px solid ${props => props.theme.text};

@media (max-width: 48em){
    
    width: 90%;

    }

`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

@media (max-width: 48em){
    
    width: 100%;

    }

`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.2);
    }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;
color: ${props => props.theme.text};
@media (max-width: 48em){
    
    display: none;

    }

`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
    content: ' ' ;
    display: block;
    width: 0;
    height: 2px;
    background:  ${props => props.theme.body};
    
    transition: width 0.3s ease;
}

&:hover::after{
    width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};

a{
    text-decoration: underline;
}
@media (max-width: 48em){
    
    flex-direction: column;
    width: 100%;

    span{
        margin-bottom: 1rem;
    }

    }


`
const Footer = ( ) =>{

    const scrollTo = (id) =>{
        let element = document.getElementById(id)

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }
    return(
        <Section id="footer">
            <Banner/>
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a href="https://facebook.com/Manor" target="_blank" rel="noopenner noreferrer"><Facebook /> </a>
                        <a href="https://twitter.com/wandeoki" target="_blank" rel="noopenner noreferrer"><Twitter /> </a>
                        <a href="https://linkedln.com/hamid-adewuyi" target="_blank" rel="noopenner noreferrer"><Linkedln /> </a>
                        <a href="https://facebook.com/manor" target="_blank" rel="noopenner noreferrer"><Instagram /> </a>
                    </IconList>
                </Left>
                <MenuItems>
                <Item onClick={() => scrollTo('home')}>Home</Item>
        <Item onClick={() => scrollTo('about')}>About</Item>
        <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
        <Item onClick={() => scrollTo('team')}>Team</Item>
        <Item onClick={() => scrollTo('Faq')}>FAQ</Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Glebe inc. All rights reserved
                </span>
                <span> made with &#10084; by <a href="https://twitter.com/wandeoki" target="_blank" rel="noopener noreferrer">Wande</a>🤠</span>
                </Bottom>
        </Section>
    )

 }

export default Footer;