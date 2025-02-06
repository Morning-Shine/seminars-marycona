import React, { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import { TSeminarEditFormProps } from './types';
import {
  DescInput,
  ModalBtnsCont,
  ModalInsideCont,
  OneStringInput,
} from './styled/components';
import { ButtonIcon } from 'shared/components/ButtonIcon';

export const SeminarEditForm: React.FC<TSeminarEditFormProps> = (props) => {
  const { setActiveCard, onUpdateCard, data, cardNumber } = props;

  const { description, title, photo } = data.find(
    (sem) => sem.id === cardNumber
  )!;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPhotoUrl, setNewPhotoUrl] = useState(photo);

  return (
    <Modal onClose={() => setActiveCard(undefined)}>
      <ModalInsideCont>
        <h6>Заголовок семинара</h6>
        <OneStringInput
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <h6>Краткое содержание</h6>
        <DescInput
          value={newDescription}
          rows={5}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <h6>URL-адрес презентационного изображения</h6>
        <OneStringInput
          type="text"
          value={newPhotoUrl}
          onChange={(e) => setNewPhotoUrl(e.target.value)}
        />
        <ModalBtnsCont>
          <ButtonIcon
            type={'ok'}
            onClick={() => {
              onUpdateCard(newTitle, newDescription, newPhotoUrl);
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
