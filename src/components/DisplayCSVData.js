import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; 

// This functional component renders CSV data in a table format
function DisplayCSVData({ fileName, filePath }) {
  // State variable to hold the parsed CSV data
  const [csvData, setCsvData] = useState([]);

  // useEffect hook to fetch and parse CSV data on component mount or filePath change
  useEffect(() => {
    const fetchData = async () => {
      try {

        // Fetch the CSV file content
        const response = await fetch(filePath);
        const csvText = await response.text();

        // Parse the CSV text using Papaparse library with header row enabled
        const result = Papa.parse(csvText, { header: true });

        // Create a new array of data that is capped to a maximum number of rows to display
        let reducedData = [];
        const maxSize = 200;

        //Move the data that should be included into the new array
        for(let i in result.data) {
          reducedData.push(result.data[i]);
          if(reducedData.length >= maxSize) {
            break;
          }
        }

        // Update the state with the parsed data
        setCsvData(reducedData);
      } catch (error) {
        console.log("here1");
        console.error('Error fetching CSV file:', error);
      }
    };

    fetchData();
  }, [filePath]);

  return (
    <div>
      <h2>{fileName}</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {csvData.length > 0 && Object.keys(csvData[0]).map((header, index) => (
              <th key={index} style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: 'grey' }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayCSVData;