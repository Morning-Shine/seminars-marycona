import React from 'react';
import { HeaderWrapper } from './styled/components';

export const Header: React.FC = (props) => {
  return (
    <HeaderWrapper>
      <h3>Тестовое задание ITstart</h3>
      <h6>
        Автор: <a href="https://t.me/Marycona">Мария Кононец</a>
      </h6>
    </HeaderWrapper>
  );
};
