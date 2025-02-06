import React from 'react';
import loader from 'shared/assets/imgs/main-loader.gif';
import { LoaderCont } from './styled/components';

export const Loader: React.FC = () => {
  return (
    <LoaderCont>
      <img
        alt="loader"
        src={loader}
      />
    </LoaderCont>
  );
};
