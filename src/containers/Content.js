import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/searchbox';
import Visualiser from '../containers/Visualiser';
import '../stylesheets/containers/content.scss';
import { fetchQueries } from '../store/actions';

const Content = ({ form, fetchQueries }) => {
  useEffect(() => {
    fetchQueries({
      ...form.input
    });
  }, [fetchQueries, form.input]);
  return (
    <div className="content">
      <div className="searchbar">
        <SearchBox />
        <div className="separator" />
        <Visualiser />
      </div>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  form
});

const mapDispatchToProps = dispatch => ({
  fetchQueries: ({
    query,
    start_ts,
    end_ts,
    count,
    offset,
    partitions,
    forward
  }) =>
    dispatch(
      fetchQueries({
        query,
        start_ts,
        end_ts,
        count,
        offset,
        partitions,
        forward
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
