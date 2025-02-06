import React from 'react';
import { ModalInsideCont, ModalBtnsCont } from './styled/components';
import Modal from 'shared/components/Modal/Modal';
import { ButtonIcon } from 'shared/components/ButtonIcon';
import { TModalApplyDenyProps } from './types';

export const ModalApplyDeny: React.FC<TModalApplyDenyProps> = (props) => {
  const { setActiveCard, onDeleteCard } = props;
  return (
    <Modal onClose={() => setActiveCard(undefined)}>
      <ModalInsideCont>
        <p>Вы действительно хотите удалить эту запись?</p>
        <ModalBtnsCont>
          <ButtonIcon
            type={'ok'}
            onClick={() => {
              onDeleteCard();
              setActiveCard(undefined);
            }}
          />
          <ButtonIcon
            type={'deny'}
            onClick={() => setActiveCard(undefined)}
          />
        </ModalBtnsCont>
      </ModalInsideCont>
    </Modal>
  );
};
