import Modal from '../constants/modal';

export const modalOpened = () => {
  return {
    type: Modal.OPENED,
  };
};

export const modalClosed = () => {
  return {
    type: Modal.CLOSED
  };
};
