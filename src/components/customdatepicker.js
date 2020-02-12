import React, { useState } from 'react';
import moment from 'moment';
import '../stylesheets/components/datepicker.scss';
import '../stylesheets/components/buttons.scss';

const CustomDatePicker = ({ closeModal, setInput, time }) => {
  const [startTime, setStartTime] = useState(
    moment(time.start_ts).format('YYYY-MM-DDThh:mm')
  );
  const [endTime, setEndTime] = useState(
    moment(time.start_ts).format('YYYY-MM-DDThh:mm')
  );
  return (
    <div className={`datepicker-container animated flipInX`}>
      <div className="header">
        <h3>Choose Start and End Time</h3>
        <i className="material-icons close" onClick={() => closeModal()}>
          close
        </i>
      </div>
      <br />
      <br />
      <div className="content">
        <div className="item">
          <label>Start Date & Time</label>
          <input
            type="datetime-local"
            onChange={e => setStartTime(e.target.value)}
            value={startTime}
          />
        </div>
        <div className="item">
          <label>End Date & Time</label>
          <input
            type="datetime-local"
            onChange={e => setEndTime(e.target.value)}
            value={endTime}
          />
        </div>
      </div>
      <div className="footer">
        <button
          className="submit-button"
          onClick={() => {
            setInput({ field: 'start_ts', value: moment(startTime).unix() });
            setInput({ field: 'end_ts', value: moment(endTime).unix() });
            closeModal();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CustomDatePicker;
