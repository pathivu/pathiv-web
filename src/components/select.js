import React, { Component } from 'react';
import '../stylesheets/components/select.scss';

const Select = ({ partitions, value, microservices, onChangeSelect }) => {
  return (
    <select className="select" value={value} onChange={onChangeSelect}>
      {partitions.map(partition => (
        <option value={partition}>{partition}</option>
      ))}
      {/* <option value={1}>Microservice #1</option>
      <option value={2}>Microservice #2</option> */}
    </select>
  );
};

export default Select;
