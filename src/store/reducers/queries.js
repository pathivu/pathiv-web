import { SET_PARTITIONS, SET_QUERIES } from '../constants';

const initialState = {
  partitionsLoading: false,
  partitions: [],
  queries: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTITIONS:
      return {
        ...state,
        partitions: action.partitions
      };
    case SET_QUERIES:
      return {
        ...state,
        queries: action.queries
      };
    default:
      return state;
  }
};
