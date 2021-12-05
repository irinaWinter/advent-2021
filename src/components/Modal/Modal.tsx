import { useDispatch } from 'react-redux';

import Portal from '../Portal/Portal';
import { Button } from '../';
import { modalClosed } from '../../actions';
import { P } from '../';
import styles from './Modal.module.css'
import cn from 'classnames'

interface onCloseProps {
  onClose: () => void
}

const Modal = ({ onClose }: onCloseProps): JSX.Element => {
  const dispatch = useDispatch();

  const dispatchModalClosed = () => {
    dispatch(modalClosed());
    onClose();
  };

  return (
    <Portal>
      <div className={cn(styles.overlay)}>
        <div className={cn(styles.modal)}>

          {/* Вынести в копонент */}
          <P size={'l'}>
            Time is up
          </P>

          <Button
            className="form__button button"
            onClick={dispatchModalClosed}
          >
            Cancel
          </Button>

        </div>
      </div>
    </Portal>
  );
};

export default Modal;
