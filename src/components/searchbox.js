import React from 'react';
import { connect } from 'react-redux';
import {  changeFormValue } from '../store/actions/';
import '../stylesheets/components/searchbox.scss';

const SearchBox = ({ form, changeFormValue }) => {
  const handleTextInput = (e) => {
    changeFormValue({
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
  changeFormValue: ({ field, value }) => dispatch(changeFormValue({ field, value }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
