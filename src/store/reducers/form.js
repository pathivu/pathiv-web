import { SET_INPUT } from '../constants';

const initialState = {
  input: {
    query: '',
    start_ts: 0,
    end_ts: 0,
    count: 1000,
    offset: 0,
    partitions: ['demo'],
    forward: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: {
          ...state.input,
          [action.field]: action.value
        }
      };
    default:
      return state;
  }
}
