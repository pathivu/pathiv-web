import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { tryHostUrl, toggleModal } from '../store/actions/';
import '../stylesheets/containers/config.scss';
import '../stylesheets/containers/buttons.scss';

const Config = ({ config, toggleModal, tryHostUrl }) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(config.hostUrl);
  }, [config.hostUrl]);
  if (config.open || config.hostUrl === '') {
    return (
      <div className="config-container">
        <div className="header">
          <h1 className="title">Config</h1>
          <i
            className="material-icons close"
            onClick={() => toggleModal({ open: false })}
          >
            close
          </i>
        </div>
        <div className="body">
          <label for="hostUrl">Host URL: </label>
          <input
            className="input"
            placeholder="Enter Host URL"
            id="hostUrl"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
        <div className="footer">
          <button
            className="submit-button"
            onClick={() =>
              tryHostUrl({
                url,
                callBack: () => toggleModal({ open: false })
              })
            }
          >
            Save & Exit
          </button>
        </div>
      </div>
    );
  }
  return null;
};

const mapStateToProps = ({ general: { config } }) => ({ config });

const mapDispatchToProps = dispatch => ({
  tryHostUrl: ({ url, callBack }) => dispatch(tryHostUrl({ url, callBack })),
  toggleModal: ({ open }) => dispatch(toggleModal({ open }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Config);
