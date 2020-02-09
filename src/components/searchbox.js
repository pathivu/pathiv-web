import React from 'react';
import { connect } from 'react-redux';
import { setInput, toggleModal } from '../store/actions/';
import '../stylesheets/components/searchbox.scss';

const SearchBox = ({ form, setInput, toggleModal }) => {
  const handleTextInput = e => {
    setInput({
      field: 'query',
      value: e.target.value
    });
  };
  return (
    <div className="searchbar-container">
      <input
        className="input"
        placeholder="Search Something..."
        value={form.query}
        onChange={handleTextInput}
      />
      <i className="material-icons gear-icon" onClick={() => toggleModal({ open: true })}>settings</i>
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
