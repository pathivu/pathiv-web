import React, { useState } from 'react';
import '../stylesheets/components/select.scss';

const Select = ({
  partitions,
  value,
  onChangeSelect,
  setInput,
  selectedPartitions
}) => {
  const [dropdownOpen, openDropdown] = useState(false);
  return (
    <div>
      <div className="dropdown" onBlur={() => openDropdown(false)}>
        <div
          className="dropdown-header"
          onMouseDown={() => openDropdown(!dropdownOpen)}
          style={{ borderRadius: dropdownOpen ? '6px 6px 0px 0px' : '6px' }}
        >
          <span>
            {selectedPartitions.length === 0
              ? 'Select Microservices'
              : `${selectedPartitions.length} selected`}
          </span>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
        <div
          className="dropdown-content"
          style={{ display: dropdownOpen ? 'block' : 'none' }}
        >
          {partitions.map(value => (
            <div
              className="dropdown-item"
              onClick={() =>
                setInput({
                  field: 'partitions',
                  value:
                    selectedPartitions.indexOf(value) === -1
                      ? [...selectedPartitions, value]
                      : selectedPartitions.filter(val => val !== value)
                })
              }
            >
              {value}{' '}
              {selectedPartitions.indexOf(value) !== -1 && (
                <i className="material-icons">done</i>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
