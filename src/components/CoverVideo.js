import React from 'react' 
import styled from 'styled-components'
import GIF from '../assets/gif.mp4'


const VContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto;

}
@media(max-width: 64em){
   min-width: 40vh;

}
`

const CoverVideo = () => {

    return(
<VContainer>
    <video src={GIF} alt='monar videos' type='video/mp4' autoPlay muted loop/>
</VContainer>

    )

}

export default CoverVideo