import { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  // State variables for selected option and entered data
  const [selectedOption, setSelectedOption] = useState('');
  const [enteredData, setEnteredData] = useState('');

  // Function to handle option selection
  function toggleOption(option) {
    setSelectedOption(option);
    saveData(option);
  }

  // Function to handle data input
  function handleDataInput(event) {
    const inputData = event.target.value;
    setEnteredData(inputData);
    saveData(inputData);
  }

  // Function to save data
  function saveData(data) {
    console.log('Data saved:', data);
  }

  // Function to handle form submission
  function handleSubmit() {
    console.log('Selected option:', selectedOption);
    console.log('Entered data:', enteredData);
  }

  return (
    <>
      <div>
        <Background />
        <Home />
        {/* Options */}
        <div>
          <button
            className={selectedOption === 'Option 1' ? 'selected' : ''}
            onClick={() => toggleOption('Option 1')}
          >
            Option 1
          </button>
          <button
            className={selectedOption === 'Option 2' ? 'selected' : ''}
            onClick={() => toggleOption('Option 2')}
          >
            Option 2
          </button>
        </div>
        {/* Input */}
        <input type="text" onChange={handleDataInput} />
        <button className='submit' onClick={handleSubmit}>Submit</button> {/* Submit button */}
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
