import { SHOW_MODAL, CLOSE_MODAL } from "./consts";


export const showModal = (component) => {
  return {
    type: SHOW_MODAL,
    payload: { show: true, component }
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

