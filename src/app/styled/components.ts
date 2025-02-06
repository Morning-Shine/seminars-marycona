import styled from '@emotion/styled';

export const AppCont = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: auto 1fr;
`;
