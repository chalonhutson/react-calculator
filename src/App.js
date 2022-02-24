import { useState } from 'react'
import './App.css'
import ButtonNumber from './components/ButtonNumber'
import ButtonOperation from './components/ButtonOperation'
import ButtonEquals from './components/ButtonEquals'

function App() {
  const [currentTotal, setCurrentTotal] = useState(0)
  const [displayNumber, setDisplayNumber] = useState(null)
  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)
  const [operation, setOperation] = useState()


  function adjustTotal () {
    switch (operation) {
      case '+':
        setCurrentTotal(() => currentTotal + number1)
        setNumber1(currentTotal)
        break;
      case '-':
        setCurrentTotal(() => currentTotal - number1)
        setNumber1(currentTotal)
        break;
    }
  }

  function numberPress (num) {
    if (displayNumber === null) {
      setDisplayNumber(num.toString())
    } else {
      let array = [displayNumber, num.toString()]
      setDisplayNumber(array.join(''))
    }
  }


  return (
    <div className="App">
      <div className='upperScreen'>
        <h1 className='total'>{displayNumber ? displayNumber : '0'}</h1>
      </div>
      <div className='bottomButtons'>
        <div className='buttonRow'>
          <ButtonNumber number={1} callback={numberPress} />
          <ButtonNumber number={2} callback={numberPress} />
          <ButtonNumber number={3} callback={numberPress} />
        </div>
        <div className='buttonRow'>
          <ButtonNumber number={4} callback={numberPress} />
          <ButtonNumber number={5} callback={numberPress} />
          <ButtonNumber number={6} callback={numberPress} />
        </div>
        <div className='buttonRow'>
          <ButtonNumber number={7} callback={numberPress} />
          <ButtonNumber number={8} callback={numberPress} />
          <ButtonNumber number={9} callback={numberPress} />
        </div>
        <div className='buttonRow'>
          <ButtonNumber number={0} callback={numberPress} />
        </div>
      <div className='operationButtons'>
        <ButtonOperation operation={'+'} callback={setOperation} />
        <ButtonEquals callback={adjustTotal} />
      </div>
      </div>
    </div>
  );
}

export default App;
