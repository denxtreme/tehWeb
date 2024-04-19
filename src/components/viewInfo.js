import React from 'react';

import "../Styling/viewInfo.css"



export const ViewInfo = ({ data }) => {


    const { clientID, usertype, ...userDataWithoutIDType } = data;

    return (
      <div className="table-container-info">
        <table className='table_info'>
          <thead>
            <tr>
              <th>User Details</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userDataWithoutIDType).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };



