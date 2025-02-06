import React, { useEffect, useState } from 'react';
import CardMockBGImg from 'shared/assets/imgs/card-mock.jpg';
import {
  CardCont,
  TextOverlay,
  DateInfo,
  BtnDeleteCont,
  Header,
  Description,
} from '../styled/components';
import { ButtonIcon } from 'shared/components/ButtonIcon';
import { TSeminarCardProps } from './types';

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
  const [backgroundImage, setBackgroundImage] = useState(CardMockBGImg);

  useEffect(() => {
    const img = new Image();
    img.src = photo;
    img.onload = () => {
      setBackgroundImage(photo);
    };
  }, [photo]);

  return (
    <CardCont photo={backgroundImage}>
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
