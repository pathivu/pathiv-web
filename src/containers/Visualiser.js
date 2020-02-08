import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../stylesheets/containers/visualiser.scss';

const bigJSON = {
  name: 'Rahul Krishna',
  age: 22,
  relationshipStatus: 'committed',
  nationality: 'Indian',
  politicalLeaning: 'left',
  politicalAffiliation: 'Communist Party of India (Marxist)'
};

const JsonContent = ({ children }) => {
  const [expanded, expand] = useState(false);
  return (
    <div
      className="json-content"
      onClick={() => expand(!expanded)}
      style={{
        overflow: expanded ? 'visible' : 'hidden',
        whiteSpace: expanded ? 'pre-wrap' : 'nowrap',
        overflowWrap: expanded ? 'break-word' : 'unset'
      }}
    >
      {JSON.stringify({ ...children, ...bigJSON })}
    </div>
  );
};

const Visualiser = ({ queries }) => {
  return (
    <div className="visualiser">
      {queries.map(query => (
        <div className="row">
          <JsonContent>{query.entry}</JsonContent>
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
