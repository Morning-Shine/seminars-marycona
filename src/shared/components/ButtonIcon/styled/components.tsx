import styled from '@emotion/styled';
import { TButtonIconContProp } from '../types';

export const ButtonIconCont = styled.button<TButtonIconContProp>`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.color};
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  font-weight: 400;
  transition: all 200ms ease-in-out 0s;
  cursor: pointer;
  :hover {
    font-size: 2.5rem;
    background: rgba(255, 255, 255, 0.8);
  }
`;
