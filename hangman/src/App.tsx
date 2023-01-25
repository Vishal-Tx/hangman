import React, { useState } from 'react'
import words from "./wordList.json"
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetter = guessedLetters.filter(letter=>!wordToGuess.includes(letter))
  console.log(wordToGuess)
  return (
    <div 
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      gap: "1rem",
      margin: "0 auto",
      alignItems: "center",
    }}
  >
     <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {/* {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"} */}
        win
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetter.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf:'stretch'}}>
      <Keyboard /></div>
  </div>
  )
}

export default App