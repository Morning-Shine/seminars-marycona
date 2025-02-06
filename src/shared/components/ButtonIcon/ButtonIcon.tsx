import React from 'react';
import { ButtonIconCont } from './styled/components';
import { TButtonIcon } from './types';

export const ButtonIcon: React.FC<TButtonIcon> = ({ type, onClick }) => {
  let symbol, color;
  switch (type) {
    case 'ok':
      symbol = '✓';
      color = '#1d7a1d';
      break;
    case 'deny':
      symbol = '×';
      color = '#e23434';
      break;
  }
  return (
    <ButtonIconCont
      color={color}
      onClick={onClick}
    >
      {symbol}
    </ButtonIconCont>
  );
};
