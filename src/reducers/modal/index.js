import { createReducer } from "../createReducer";
import { SHOW_MODAL, CLOSE_MODAL } from "../../actions/modal/consts";

const initialState = null;


const showModal = (state, payload) => {
  const { show, component } = payload;
  return { ...state, show, component }
}

const closeModal = (state, payload) => {
  return { ...state, show: false, component:null  }
}


export default createReducer(initialState, {
  [SHOW_MODAL]: showModal,
  [CLOSE_MODAL]: closeModal
});