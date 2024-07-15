import React, { useState } from 'react';
import '../App.css';
import Download from './Download';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleNext = () => {
    // Check if both select options are selected before moving to Page 2
    if (selectedOption1 && selectedOption2) {
      setCurrentPage(2);
    } else {
      alert('Please select both options before moving to the next page');
    }
  };

  return (
    <>
     <Navbar />
      <Box height={100} />
        <Sidenav />
    <div>
      {currentPage === 1 ? (
        <div>
          <h1 className='h1'>BookCenter</h1>
          <center><h1>Hello User!.... Welcome to the Book center</h1>
          <p>In this You can choose your Regulation and Choose your Year and Download the files that you need to download</p>
          <p className="bold-text big-text">Happy Learning!</p></center>
          <center>
          <div>
            <label htmlFor="option1">Select Regulation:</label>
            <select
              id="option1"
              name="option1"
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
              style={{ fontWeight: 'bold' }} 
            >
              <option value="">Regulation</option>
              <option value="Option 1A">R20</option>
              <option value="Option 1B">R19</option>
              <option value="Option 1C">R16</option>
            </select>
          </div>
          <div>
            <label htmlFor="option2">Select the Year:</label>
            
            <select
              id="option2"
              name="option2"
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
              style={{ fontWeight: 'bold' }} 
            >
              <option id="y1"value="">Year</option>
              <option value="Option 2A">1</option>
              <option value="Option 2B">2</option>
              <option value="Option 2C">3</option>
              <option value="Option 2C">4</option>
            </select>
            
          </div>
          
          </center>
          <center><button onClick={handleNext}>Next</button></center>
          
        </div>
        
      ) : (
        <Download selectedOption1={selectedOption1} selectedOption2={selectedOption2} />
      )}
      
    </div>
    </>
  );
};

export default Books;