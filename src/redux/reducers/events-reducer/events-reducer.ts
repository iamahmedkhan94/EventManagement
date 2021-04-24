import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  eventList: [],
  isLoggedIn: false,
  error: null,
  isSuccess: false,
  isFailure: false,
};
const eventsReducer = (state = initialState, actions: any) => {
  switch (actions.type) {
    case TYPES.ADDLISTITEM_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.ADDLISTITEM_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.ADDLISTITEM_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        eventList: [...state.eventList, actions.data],
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.DELETE_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.DELETE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        eventList: state.eventList.filter(item => actions.data == item),
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };
    case TYPES.UPDATE_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.UPDATE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: actions.data,
        isLoggedIn: false,
        isSuccess: false,
        isFailure: true,
      };
    case TYPES.UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        eventList: state.eventList.filter(item => actions.data !== item),
        isLoggedIn: true,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};
export default eventsReducer;
