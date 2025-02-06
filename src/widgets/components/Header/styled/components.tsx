import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  grid-area: header;
  position: fixed;
  height: 80px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  z-index: 1000;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  padding-top: 16px;
  h3 {
    margin-left: 32px;
    font-size: xx-large;
    text-align: center;
  }
  h6 {
    font-size: large;
  }
  a {
    cursor: pointer;
  }
`;
