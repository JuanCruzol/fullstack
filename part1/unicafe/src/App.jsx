import { useState } from 'react'

const Button = ({handleclick , text})=> {
  return (
    <button onClick={handleclick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statics = ({good,bad,neutral}) => {
  const total =good+bad+neutral
  const aver = (good-bad)/total
  const posi = ((good)/total) *100
  if (total ===0) {
    return (
      <div>
        <p>No feedBack Given</p>
      </div>
    )
  }
  return (
    <table>
    <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={aver} />
      <StatisticLine text="positive" value={`${posi} %`} />
    </tbody>
  </table>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const GoodFeed = () => {
    console.log("increment good feedBack")
    setGood(good+1)
  }

  const NeutralFeed = () => {
    console.log("increment neutral feedBack")
    setNeutral(neutral+1)
  }

  const BadFeed = () => {
    console.log("increment Bad feedBack")
    setBad(bad+1)
  }
  return (
    <div>
      <p> give feedback</p>
      <Button  handleclick={GoodFeed} text="good"/>
      <Button  handleclick={NeutralFeed} text="neutral"/>
      <Button  handleclick={BadFeed} text="bad"/>
      <p>statics</p>
      <Statics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App