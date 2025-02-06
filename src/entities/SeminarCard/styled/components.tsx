import styled from '@emotion/styled';
import { TCardContProps } from './types';

export const CardCont = styled.div<TCardContProps>`
  display: block;
  position: relative;
  width: 400px;
  height: 250px;
  margin: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
  transition: all 300ms ease-out 0s;
  overflow: hidden;
  &::before {
    content: '';
    background-image: url(${(props) => props.photo});
    background-size: cover;
    opacity: 0.7;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

export const BtnDeleteCont = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;


export const DateInfo = styled.p`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
`;

export const TextOverlay = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  height: 40%;
  top: 60%;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.3);
  padding: 10px 12px;
  overflow: hidden;
  transition: all 300ms ease-in-out 0s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    height: 50%;
    top: 50%;
    transition: all 300ms ease-in-out 0s;
  }
`;

export const Header = styled.h2`
  color: rgba(#000, 0.85);
  letter-spacing: 0.0225em;
  width: auto;
  margin: 0;
`;

export const Description = styled.p`
  color: #555;
  width: 380px;
  margin: 8px 0;
  line-height: 1.25;
  text-overflow: ellipsis;
  overflow: hidden;
`;
