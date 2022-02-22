import logo from './logo.svg'
import './App.css'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='ButtonRow'>
          <Button number={1} />
          <Button number={2} />
          <Button number={3} />
        </div>
        <div className='ButtonRow'>
          <Button number={4} />
          <Button number={5} />
          <Button number={6} />
        </div>
        <div className='ButtonRow'>
          <Button number={7} />
          <Button number={8} />
          <Button number={9} />
        </div>
        <div className='ButtonRow'>
          <Button number={0} />
        </div>
      </header>
    </div>
  );
}

export default App;
