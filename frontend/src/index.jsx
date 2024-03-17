import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import MedalRenderer from './medalRenderer.jsx';
import './styles.css';

// Create new GridExample component
const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([

  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    {
        field: 'test',
        cellRenderer: MedalRenderer,
    },
    { field: 'dataname' },
    { field: 'startdate' },
    { field: 'enddate' },
    { field: 'cadence' },
    { field: 'distance' },
    { field: 'solo_earth_angle' },
    { field: 'file' },
    { field: 'duration' },
    { field: 'crval1' },
    { field: 'crval2' },
    { field: 'soopname' },
    { field: 'xposure' },
    { field: 'filter' },
    { field: 'target' },
    { field: 'nbin1' },
    { field: 'gaincomb' },
    { field: 'recstate' },
    { field: 'combitpp' },
    { field: 'datamin' },
    { field: 'datamax' },
    { field: 'hglt_obs' },
    { field: 'hgln_obs' },
    { field: 'crlt_obs' },
    { field: 'crln_obs' },
    { field: 'Comments' },
  ]);

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('http://localhost:8000/Hrieuv/') // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  }, []);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={
        "ag-theme-quartz"
      }
      style={{ width: '100%', height: '500px' }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

// Render GridExample
const root = createRoot(document.getElementById('root'));
root.render(<GridExample />);