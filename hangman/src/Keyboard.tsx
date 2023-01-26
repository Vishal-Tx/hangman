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
    addGuessedLetter:(letter: string) => void,
    disabled:boolean,

  }

const Keyboard = ({inactiveLetters,activeLetters,addGuessedLetter, disabled=false}:KeyboardProps) => {
    
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}>{KEYS.map(key=>{ const isActive =activeLetters.includes(key)
        const isInActive = inactiveLetters.includes(key)
        return(<button disabled={isActive||isInActive||disabled} onClick={()=>addGuessedLetter(key)} className={`${styles.btn} ${isActive?styles.active:""}${isInActive?styles.inactive:""}`} key={key}>{key}</button>)})}</div>
  )
}

export default Keyboard