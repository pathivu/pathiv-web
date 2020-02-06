import axios from 'axios';
import { SET_INPUT, SET_PARTITIONS, SET_QUERIES } from '../constants';

export const fetchPartitions = () => dispatch =>
  axios({
    method: 'get',
    url: '/partitions'
  })
    .then(data => {
      console.log({ data });
      dispatch(setPartitions(data.data.partitions));
    })
    .catch(error => {
      console.log({ error });
    });

const setPartitions = partitions => ({
  type: SET_PARTITIONS,
  partitions
});

export const fetchQueries = ({
  query,
  start_ts,
  end_ts,
  count,
  offset,
  partitions,
  forward
}) => dispatch =>
  axios({
    method: 'post',
    url: '/query',
    data: {
      query,
      start_ts,
      end_ts,
      count,
      offset,
      partitions,
      forward
    }
  })
    .then(data => {
      console.log({ data });
      dispatch(setQueries(data.data.data));
    })
    .catch(error => {
      console.log({ error });
    });

const setQueries = queries => ({
  type: SET_QUERIES,
  queries
});

export const changeFormValue = ({ field, value }) => ({
  type: SET_INPUT,
  field,
  value
});
