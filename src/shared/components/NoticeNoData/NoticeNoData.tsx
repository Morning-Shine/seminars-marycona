import React from 'react';
import noticeNoData from 'shared/assets/imgs/notice-no-data.png';
import { NoticeNoDataCont } from './styled/components';

export const NoticeNoData: React.FC = () => {
  return (
    <NoticeNoDataCont>
      <img
        alt="notice-no-data"
        src={noticeNoData}
      />
      <p>Запрашиваемые данные не найдены</p>
    </NoticeNoDataCont>
  );
};
