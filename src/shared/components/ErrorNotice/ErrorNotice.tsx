import React from 'react';
import errorLoad from 'shared/assets/imgs/error-load.png';
import { ErrorNoticeCont } from './styled/components';

export const ErrorNotice: React.FC = () => {
  return (
    <ErrorNoticeCont>
      <img
        alt="error-load"
        src={errorLoad}
      />
      <p>Ой! Что-то случилось на сервере. Уже разбираемся...</p>
    </ErrorNoticeCont>
  );
};
