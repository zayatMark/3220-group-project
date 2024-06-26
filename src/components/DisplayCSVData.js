/**
 * @version 1.0.0
 * This class component renders CSV data in a table format
 */

import React, { Component } from 'react';
import Papa from 'papaparse'; 

class DisplayCSVData extends Component {

  constructor(props) {
    super(props)

    this.state = {
      csvData: [],
      isDataReduced: false
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidMount();
  }

  // componentDidMount to fetch and parse CSV data on component mount or filePath change
  componentDidMount() {
    const fetchData = async () => {
      try {

        // Fetch the CSV file content
        const response = await fetch(this.props.filePath);
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

        // Update the state with the parsed data and update the state for if the data was truncated
        this.setState({csvData: reducedData});
        this.setState({isDataReduced: result.data.length > maxSize});

      } catch (error) {
        console.log("here1");
        console.error('Error fetching CSV file:', error);
      }
    };

    fetchData();
  }

  render() {
    return (
      <div>
        <h2>{this.props.fileName}</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              {this.state.csvData.length > 0 && Object.keys(this.state.csvData[0]).map((header, index) => (
                (index < 10) ? (
                <th key={index} style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left', backgroundColor: 'grey' }}>{header}</th>
                ) : null 
                ))}
            </tr>
          </thead>
          <tbody>
          {this.state.csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  (cellIndex < 10) ? (
                  <td key={cellIndex} style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>{cell}</td>
                  ) : null
                  ))}
              </tr>
          ))}
          </tbody>
        </table>

        {/* Display a message about the data being the data being reduced if it is not all displayed */}
        { this.state.isDataReduced ? <p><b>To see the rest of the data, download the file</b></p> : <div style={{display:"none"}} /> }
      </div>
    );
  }
}

export default DisplayCSVData;