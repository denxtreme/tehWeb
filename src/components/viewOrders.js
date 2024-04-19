import React from 'react';


import '../Styling/viewOrders.css';



export const ViewOrder = ({ orders }) => {
  return (
    <div className="table-container-order">
      <table className='table_order'>
        <thead>
          <tr>
            <th>Order_ID</th>
            <th>Produse</th>
            <th>Cantitate</th>
            <th>Total</th>
            <th>Adresa</th>
            <th>Expediat</th>
            <th>Livrat</th>
            <th>Descriere</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderID}</td>
              <td>{order.Produse}</td>
              <td>{order.Cantitate}</td>
              <td>{order.Total}</td>
              <td>{order.Adresa}</td>
              <td>{order.Expediat}</td>
              <td>{order.Livrat}</td>
              <td>{order.descriere}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

