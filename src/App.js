import { useState } from 'react'
import './App.css'
import ButtonNumber from './components/ButtonNumber'
import ButtonOperation from './components/ButtonOperation'
import ButtonOther from './components/ButtonOther'

function App() {
  const [currentTotal, setCurrentTotal] = useState(0)
  const [displayNumber, setDisplayNumber] = useState(null)
  const [activeNumber, setActiveNumber] = useState(0)
  const [previousNumber, setPreviousNumber] = useState(null)
  const [operation, setOperation] = useState(null)
  const [debugStatus, setDebugStatus] = useState(false)


  function adjustTotal () {
    switch (operation) {
      case '+':
        const newTotal = previousNumber + activeNumber
        setCurrentTotal(newTotal)
        setDisplayNumber(newTotal)
        setPreviousNumber(newTotal)
        setActiveNumber(0)
        setOperation(null)
        break;
      case '-':
        setCurrentTotal(() => previousNumber - activeNumber)
        setDisplayNumber(currentTotal)
        break;
      case null:
        break;
    }
  }

  function numberPress (num) {
    if (activeNumber === null) {
      setActiveNumber(num)
      setDisplayNumber(num.toString())
    } else {
      let array = [displayNumber, num.toString()]
      setDisplayNumber(array.join(''))
      setActiveNumber(parseInt(array.join('')))
    }
  }

  function operationPress (operationPressed) {
    if (activeNumber === null) {
      //pass
    } else if (previousNumber === null) {
      setOperation(operationPressed)
      setPreviousNumber(activeNumber)
      setActiveNumber(null)
    }
    
    else {
      setOperation(operationPressed)
      adjustTotal()
    }
  }

  function resetCalculator () {
    setCurrentTotal(0)
    setDisplayNumber(null)
    setActiveNumber(null)
    setPreviousNumber(null)
    setOperation(null)
  }


  return (
    <div className="App">
      <div className='upperScreen'>
        <h1 className='total'>{displayNumber ? displayNumber : '0'}</h1>
        <h4 className='operationText'>{operation ? operation : null}</h4>
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
        <ButtonOperation operation={'+'} callback={operationPress} />
        <ButtonOther symbol={'='} callback={adjustTotal} />
        <ButtonOther symbol={'CE'} callback={resetCalculator} />
      </div>
        <button onClick={() => debugStatus ? setDebugStatus(false) : setDebugStatus(true)}>Debug Switch</button>
      {debugStatus ? 
      <>
      <h4>Debug arena</h4>
      <h4>currentTotal = {currentTotal}</h4>
      <h4>activeNumber = {activeNumber}</h4>
      <h4>displayNumber = {displayNumber}</h4>
      <h4>previousNumber = {previousNumber}</h4>
      <h4>operation = {operation}</h4>
      </>
       : null}
      </div>
    </div>
  );
}

export default App;
