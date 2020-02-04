import React, { Component } from 'react';
import SearchBox from '../components/searchbox';
import Visualiser from '../containers/Visualiser';
import '../stylesheets/containers/content.scss';
import { connect } from 'react-redux';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="searchbar">
          <SearchBox />
          <div className="separator"></div>
          <Visualiser />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
