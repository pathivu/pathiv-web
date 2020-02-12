import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setInput, toggleModal } from '../store/actions/';
import { TIME_MAPPING } from '../utils/time';
import '../stylesheets/components/searchbox.scss';
import CustomDatePicker from './customdatepicker.js';

const TIME_OPTIONS = [
  '30 Mins',
  '1 Hour',
  '2 Hours',
  '4 Hours',
  '6 Hours',
  '8 Hours',
  '10 Hours',
  'Custom'
];

const SearchBox = ({ form, setInput, toggleModal }) => {
  const [timeDropdownOpen, openTimeDropdown] = useState(false);
  const [selectedTimeString, changeTimeString] = useState('30 Mins');
  const [customTimeOpen, openCustomTime] = useState(false);
  const handleTextInput = e => {
    setInput({
      field: 'query',
      value: e.target.value
    });
  };
  const handleTimeSelect = time => {
    changeTimeString(time);
    if (time !== 'Custom') {
      setInput({ field: 'start_ts', value: TIME_MAPPING[time].start_ts });
      setInput({ field: 'end_ts', value: TIME_MAPPING[time].end_ts });
    } else {
      // Handle the fuck out here
      openCustomTime(true);
    }
  };
  return (
    <div className="searchbar-container">
      <input
        className="input"
        placeholder="Search Something..."
        value={form.query}
        onChange={handleTextInput}
      />
      <div className="time-input">
        <span
          className="time-selected"
          onClick={() => openTimeDropdown(!timeDropdownOpen)}
        >
          {selectedTimeString}
        </span>
        <div
          className="time-dropdown"
          style={{ display: timeDropdownOpen ? 'block' : 'none' }}
        >
          {TIME_OPTIONS.map(time => (
            <div
              className="time-option"
              onClick={() => {
                handleTimeSelect(time);
                openTimeDropdown(false);
              }}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
      <i
        className="material-icons gear-icon"
        onClick={() => toggleModal({ open: true })}
      >
        settings
      </i>
      {customTimeOpen && (
        <CustomDatePicker
          closeModal={() => openCustomTime(false)}
          setInput={setInput}
          time={{
            start_ts: form.input.start_ts,
            end_ts: form.input.end_ts
          }}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  form
});

const mapDispatchToProps = dispatch => ({
  setInput: ({ field, value }) => dispatch(setInput({ field, value })),
  toggleModal: ({ open }) => dispatch(toggleModal({ open }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
