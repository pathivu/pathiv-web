import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/containers/sidebar.scss';
import Logo from '../components/logo';
import Select from '../components/select';
import { fetchPartitions } from '../store/actions/index.js';

const Sidebar = ({ partitions, fetchPartitions }) => {
  useEffect(() => {
    fetchPartitions();
  }, [fetchPartitions]);
  return (
    <div className="sidebar">
      <Logo />
      <header>Search Settings</header>
      <div className="selector">
        <label>Select Microservices</label>
        <div className="selectContainer">
          {partitions.length > 0 ? (
            <Select
              partitions={partitions}
              onChangeSelect={e => console.log({ e: e.target.value })}
            />
          ) : (
            'No Microservices found'
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ queries: { partitions } }) => ({
  partitions
});

const mapDispatchToProps = dispatch => ({
  fetchPartitions: () => dispatch(fetchPartitions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
