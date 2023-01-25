import styles from "./keyboard.module.css"
import React from 'react'
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  type KeyboardProps={
    inactiveLetters:string[],
    activeLetters:string[],
    addGuessedLetter:(letter: string) => void
  }

const Keyboard = ({inactiveLetters,activeLetters,addGuessedLetter}:KeyboardProps) => {
    
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}>{KEYS.map(key=><button  onClick={()=>addGuessedLetter(key)} className={`${styles.btn}`} key={key}>{key}</button>)}</div>
  )
}

export default Keyboard