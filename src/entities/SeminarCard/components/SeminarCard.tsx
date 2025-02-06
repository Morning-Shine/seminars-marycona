import React from 'react';
import CardMockBGImg from 'shared/assets/imgs/card-mock.jpg';
import {
  CardCont,
  TextOverlay,
  DateInfo,
  BtnDeleteCont,
  Header,
  Description,
} from '../styled';
import { ButtonIcon } from 'shared/components/ButtonIcon';
import { TSeminarCardProps } from './types';

const mock = {
  id: 8,
  title: 'Современные тренды в уходе за кожей',
  description:
    'Семинар о новейших трендах в уходе за кожей и эффективных методах лечения.',
  date: '15.02.2025',
  time: '17:00',
  photo: 'https://picsum.photos/id/8/750/730',
};

//TODO разобраться с загрузкой картинки

export const SeminarCard: React.FC<TSeminarCardProps> = (props) => {
  const {
    id,
    photo,
    title,
    description,
    date,
    time,
    onDeleteClick,
    onUpdateClick,
  } = props;

  return (
    <CardCont photo={CardMockBGImg}>
      <BtnDeleteCont>
        <ButtonIcon
          type="deny"
          onClick={() => {
            onDeleteClick(id);
          }}
        />
      </BtnDeleteCont>
      <DateInfo>
        Размещено {date} в {time}
      </DateInfo>
      <TextOverlay onClick={() => onUpdateClick(id)}>
        <Header>{title}</Header>
        <Description>{description}</Description>
      </TextOverlay>
    </CardCont>
  );
};
