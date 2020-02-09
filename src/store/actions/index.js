import axios from 'axios';
import { toast } from 'react-toastify';
import {
  SET_HOST_URL,
  SET_INPUT,
  SET_PARTITIONS,
  SET_QUERIES,
  TOGGLE_CONFIG_MODAL
} from '../constants';

const hostUrl = localStorage.getItem('hostUrl');

export const fetchPartitions = () => dispatch =>
  axios({
    method: 'get',
    url: `${hostUrl}/partitions`
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
    url: `${hostUrl}/query`,
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
    url: `${url}/partitions`
  })
    .then(() => dispatch(setHostUrl({ url })) && callBack())
    .catch(e =>
      toast('Invalid URL. /partitions returned error', { type: 'error' })
    );

export const setHostUrl = ({ url }) => ({
  type: SET_HOST_URL,
  hostUrl
});
