import * as types from '../constants/modal';

const initialState = {
  showModal: false,
  component: null,
  title: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        showModal: true
      }
    case types.HIDE_MODAL:
      return {
        ...state,
        showModal: false
      }
    case types.CHANGE_MODAL_TITLE:
      let { title } = action.payload;
      return {
        ...state,
        title,
      }
    case types.CHANGE_MODAL_CONTENT:
      let { component } = action.payload;
      return {
        ...state,
        component
      }
    default:
      return state;
  }
}

export default reducer;
