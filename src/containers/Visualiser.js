import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import JSONPretty from 'react-json-pretty';
import '../stylesheets/containers/visualiser.scss';
import 'react-json-pretty/themes/acai.css';

const JsonContent = ({ children }) => {
  const [expanded, expand] = useState(false);
  return (
    <div
      className={expanded ? 'json-content-expanded' : 'json-content'}
      onClick={() => expand(!expanded)}
    >
      <JSONPretty
        data={children}
        style={{
          overflow: expanded ? 'visible' : 'hidden',
          whiteSpace: expanded ? 'pre-wrap' : 'nowrap',
          overflowWrap: expanded ? 'break-word' : 'unset'
        }}
      />
      {/* {JSON.stringify({ ...children, ...bigJSON })} */}
    </div>
  );
};

const Visualiser = ({ queries }) => {
  return (
    <div className="visualiser">
      {queries.map(query => (
        <div className="row">
          <JsonContent>{query.entry ? query.entry : query}</JsonContent>
          <div className="date-time">
            <div className="time">
              {query.ts ? moment.unix(query.ts).format('HH:mm:ss') : null}
            </div>
            <div className="date">
              {query.ts ? moment.unix(query.ts).format('YYYY-MM-DD') : null}
            </div>
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
