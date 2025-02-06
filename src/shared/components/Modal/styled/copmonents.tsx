import styled from '@emotion/styled';

export const ModalCont = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalInside = styled.div`
  position: relative;
  background-color: rgb(199, 199, 199);
  min-width: 300px;
  min-height: 100px; 
`;

export const Close = styled.button`
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #e23434;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  :hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;
