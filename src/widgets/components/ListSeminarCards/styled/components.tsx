import styled from '@emotion/styled';

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
  overflow-y: auto;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const ModalInsideCont = styled.div`
  margin: 2.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ModalBtnsCont = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
