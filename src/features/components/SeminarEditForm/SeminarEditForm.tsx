import React, { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import { TSeminarEditFormProps } from './types';
import {
  DescInput,
  ModalBtnsCont,
  ModalInsideCont,
  TitleInput,
} from './styled/components';
import { ButtonIcon } from 'shared/components/ButtonIcon';

export const SeminarEditForm: React.FC<TSeminarEditFormProps> = (props) => {
  const { setActiveCard, description, title, onUpdateCard } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  return (
    <Modal onClose={() => setActiveCard(undefined)}>
      <ModalInsideCont>
        <TitleInput
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <DescInput
          value={newDescription}
          rows={5}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <ModalBtnsCont>
          <ButtonIcon
            type={'ok'}
            onClick={() => {
              console.log('UPDATE');
              onUpdateCard(newTitle, newDescription);
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
