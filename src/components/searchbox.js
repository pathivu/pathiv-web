import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/components/searchbox.scss';

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <input
        className="input"
        placeholder="Search Something..."
        value={value}
        onChange={this.onChange}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
