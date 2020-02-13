import { SET_HOST_URL, TOGGLE_CONFIG_MODAL } from '../constants';

const initialState = {
  config: {
    open: false,
    hostUrl: localStorage.getItem('hostUrl')
      ? localStorage.getItem('hostUrl')
      : '',
    hostUrlLoading: false,
    hostUrlError: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CONFIG_MODAL: {
      return {
        ...state,
        config: {
          ...state.config,
          open: action.open
        }
      };
    }
    case SET_HOST_URL: {
      localStorage.setItem('hostUrl', action.url);
      return {
        ...state,
        config: {
          ...state.config,
          hostUrl: action.url
        }
      };
    }
    default: {
      return state;
    }
  }
}
