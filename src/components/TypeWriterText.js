import Button from '../components/Button'
import React from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect'

const Title = styled.h2`

font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya-Telivigala', cursive;

}
.text-1{
    color: purple;
}
.text-2{
    color: green;
}
.text-3{
    color: gold;
}    

@media(max-width: 70em){
    font-size: ${props => props.theme.fontxl};
}
@media(max-width: 48em){
    align-self: center;
    text-align: center;
}
@media(max-width: 40em){
    width: 90%;
}

`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media(max-width: 40em){
    font-size: ${props => props.theme.fontmd};
}

@media(max-width: 48em){
    align-self: center;
    text-align: center;
}

`

const ButtonContainer = styled.div `
width: 80%;
align-self: flex-start;

@media(max-width: 48em){
    align-self: center;
    text-align: center;

    button{
        margin: 0 auto;
    }
}
`
const TypeWriterText = () =>{

    return(
        <>
      <Title>
                Revolutionize Your Investments with Glebe<Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class="text-1">Glebe DAO🌟</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-2">Unlock Real World Assets 🏠</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-3">Invest with Confidence 💼</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Title>
            <SubTitle>Experience the Future of Asset Tokenization</SubTitle>
            <ButtonContainer>
                <Button text="Explore" link="https://glebe-dao.vercel.app/" />
            </ButtonContainer>
        </>   
    )

}


export default TypeWriterText;
