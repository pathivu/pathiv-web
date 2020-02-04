import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/components/select.scss';

export class Select extends Component {
  render() {
    const { value, microservices, onChangeSelect } = this.props;

    return (
      <select className="select" value={value} onChange={onChangeSelect}>
        <option value={1}>Microservice #1</option>
        <option value={2}>Microservice #2</option>
      </select>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select);
