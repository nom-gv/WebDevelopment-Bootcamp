import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad 
  const avarage = (good - bad) / all
  const positive = (good / all) * 100
  
  if (all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <p>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
      all {all} <br />
      avarage {avarage} <br />
      positive {positive} % <br />
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <>
      <Title text='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />

      <Title text='statistics' />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />
    </>
  )
}

export default App