import React from 'react';
import { ListSeminarCards } from 'widgets/components';
import { MainPageCont } from './styled/components';

export const MainPage: React.FC = (props) => {
  return (
    <MainPageCont>
      ЭТО СТРАНИЦА СО СПИСКОМ
      <ListSeminarCards />
    </MainPageCont>
  );
};
