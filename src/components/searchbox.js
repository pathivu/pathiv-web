import React from 'react';
import { connect } from 'react-redux';
import {  setInput } from '../store/actions/';
import '../stylesheets/components/searchbox.scss';

const SearchBox = ({ form, setInput }) => {
  const handleTextInput = (e) => {
    setInput({
      field: 'query',
      value: e.target.value
    });
  };
  return (
    <input
      className="input"
      placeholder="Search Something..."
      value={form.query}
      onChange={handleTextInput}
    />
  );
};

const mapStateToProps = ({ form }) => ({
  form
});

const mapDispatchToProps = dispatch => ({
  setInput: ({ field, value }) => dispatch(setInput({ field, value }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
