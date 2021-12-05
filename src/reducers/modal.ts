import { ActionModel } from '../interfaces/actionModel';
import Modal from '../constants/modal';
import { ModalStateModel } from '../interfaces/ModalStateModel';

const initialState: ModalStateModel = {
  isOpen: false,
};

const modalReducer = (state = initialState, action: ActionModel) => {
  switch (action.type) {
    case Modal.OPENED:
      return {
        isOpen: true,
      };
    case Modal.CLOSED:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
