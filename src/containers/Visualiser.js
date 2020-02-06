import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../stylesheets/containers/visualiser.scss';

const Visualiser = ({ queries }) => {
  return (
    <div className="visualiser">
      {queries.map(query => (
        <div className="row">
          <div>{JSON.stringify(query.entry)}</div>
          <div>
            {query.ts
              ? moment.unix(query.ts).format('YYYY-MM-DD HH:mm:ss')
              : null}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ queries: { queries } }) => ({ queries });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visualiser);
