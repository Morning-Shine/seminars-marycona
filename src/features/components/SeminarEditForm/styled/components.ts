import styled from '@emotion/styled';

export const ModalInsideCont = styled.div`
  margin: 2.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  row-gap: 1rem;
  width: 40vw;
  h6 {
    font-size: large;
    font-weight: 600;
  }
`;

export const ModalBtnsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;

export const OneStringInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 0 10px;
  height: 3rem;
  border-radius: 5px;
  font-size: 1.2rem;
`;

export const DescInput = styled.textarea`
  width: 100%;
  font-size: 1.1rem;
  outline: none;
  border: none;
  padding: 0 10px;
  border-radius: 5px;
`;
