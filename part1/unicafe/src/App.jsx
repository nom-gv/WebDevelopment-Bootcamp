import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

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
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad}
      </p>
    </>
  )
}

export default App