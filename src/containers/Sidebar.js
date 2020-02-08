import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/containers/sidebar.scss';
import Logo from '../components/logo';
import Select from '../components/select';
import { fetchPartitions, setInput } from '../store/actions/index.js';

const Sidebar = ({ partitions, fetchPartitions, setInput }) => {
  useEffect(() => {
    fetchPartitions();
  }, [fetchPartitions]);
  useEffect(() => {
    setInput({ field: 'partitions', value: [partitions[0]] });
  }, [partitions, setInput]);
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
              onChangeSelect={e => {
                // Dispatch an action to set active partition
                setInput({ field: 'partitions', value: [e.target.value] });
                console.log({ e: e.target.value });
              }}
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
  fetchPartitions: () => dispatch(fetchPartitions()),
  setInput: ({ field, value }) => dispatch(setInput({ field, value }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
