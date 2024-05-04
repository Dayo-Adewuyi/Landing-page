import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


const Confett = () => {

    const { width, height } = useWindowSize()
  return (
    <Confetti
    numberOfPieces={100}
    gravity={0.01}
      width={width}
      height={height}
    />
  )
}



export default Confett;