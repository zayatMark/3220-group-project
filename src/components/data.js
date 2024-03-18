/**
 * @author Rocio Rueda
 * @version 1.0.0
 * 
 * is use to add data visualization from DisplayCSVData to DropBox class
 */



import React, { Component } from 'react';
import DisplayCSVData from './DisplayCSVData';
import Classification from '../multi-data-view/filecomponents';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '', /* name of file */
      filePath: '' /* path of file */
    };
  }


    /**
     * 
     * @param {*} id 
     * @returns array of values from file
     */
    getTags(id){
        console.log("id: " + id)
        const classification = new Classification();
        const result = classification.getIdContent(id);
        console.log(result)
            
        //if result is illegal
        if (typeof result != 'object' || result == null || !('Overview' in result) || !('UseCase' in result) || result.length < 4) {
            console.error("Invalid result:", result);
            return; // Exit the function or handle the error appropriately
        }

        else{
            //add filename and path to dictionary 
            const dataMappings = {
                // Example mappings
                fileName: result['fileName'], filePath: '/' + result['fileName'] + '.csv'
                // Add more mappings as needed
              };

              console.log(dataMappings);
            
            //add values to attributes in constructor
            const { fileName, filePath } = dataMappings || {};
        
            this.setState({ fileName: fileName || '', filePath: filePath || '' });
        }
    }

  componentDidMount() {
    const id = this.props.value;
    this.getTags(id)
  }

  render() {
    const { fileName, filePath } = this.state;

    return (
      <div className="Data">
        {/* checks if filename and path exists */}
        {fileName && filePath ? (
          <DisplayCSVData fileName={fileName} filePath={filePath} />
        ) : (
          <p>No data available for this ID</p>
        )}
      </div>
    );
  }
}

export default Data;
