import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TModalProps } from './types';
import { Close, ModalCont, ModalInside } from './styled/copmonents';

const Modal: React.FC<TModalProps> = (props) => {
  const { children, onClose } = props;

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const onCloseHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);
    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = (
    <ModalCont onClick={(e) => onCloseHandler(e)}>
      <ModalInside>
        <Close onClick={onClose}>&#215;</Close>
        {children}
      </ModalInside>
    </ModalCont>
  );

  return <>{createPortal(render, document.body)}</>;
};

export default Modal;
