import axios from 'axios';
import { toast } from 'react-toastify';
import {
  SET_HOST_URL,
  SET_INPUT,
  SET_PARTITIONS,
  SET_QUERIES,
  TOGGLE_CONFIG_MODAL
} from '../constants';

export const fetchPartitions = () => dispatch =>
  axios({
    method: 'get',
    url:
      console.log({ hostUrl: localStorage.getItem('hostUrl') }) ||
      `${localStorage.getItem('hostUrl')}/partitions`,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
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
    url: `${localStorage.getItem('hostUrl')}/query`,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
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

export const setInput = ({ field, value }) => ({
  type: SET_INPUT,
  field,
  value
});

export const toggleModal = ({ open }) => ({
  type: TOGGLE_CONFIG_MODAL,
  open
});

export const tryHostUrl = ({ url, callBack }) => dispatch =>
  axios({
    method: 'get',
    url: `${url}/partitions`,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(() => {
      dispatch(setHostUrl({ url }));
      callBack();
    })
    .catch(e =>
      toast('Invalid URL. /partitions returned error', { type: 'error' })
    );

export const setHostUrl = ({ url }) => ({
  type: SET_HOST_URL,
  url
});
