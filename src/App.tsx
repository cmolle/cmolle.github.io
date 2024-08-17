import { useState } from 'react';
import './App.css'
import { Box, Button } from '@mui/material'

function App() {
  const [result, setResult] = useState<string>("Pas de mot trouvé");
  const [isCorrect, setIsCorrect] = useState<boolean>(true);
  const [lettersToShow, setLettersToShow] = useState(["a", "b", "c", "d", "e", "f", "g"]);



  return (
    <>
      <Box id="game-container">

        <Box id="images-container">
            <img id="queue-image" src="queue1.png" alt="Queue" className='side-image' />
            <Box id="dynamic-letter-container"></Box>
            <img id="tete-image" src="tete1.png" alt="Tête" className='side-image' />
        </Box>
        <Box id="score-container" style={{ color: isCorrect ? "green" : "red" }}>{result}</Box>
        <Box id="letters-container">{lettersToShow.map(l => <div className='letter'>{l}</div>)}</Box>

        <Box id="input-container">
            <Button id="reset-button">
                <img src="red_cross.png" alt="Reset" style={{ width: "34px", height:"34px", background: "transparent" }} />
            </Button>
            <Button id="delete-button">
                <img src="yellow_back_arrow.png" alt="Delete" style={{ width: "34px", height:"34px", background: "transparent" }} />
            </Button>
        </Box>

        <Button id="validate-button">Valider</Button> 

        </Box>
    </>
  )
}

export default App
