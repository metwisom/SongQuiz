import {ReactNode} from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  background-color: #f00;
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.5) 38%, rgba(57,186,5,0.5) 68%, rgba(0,212,255,0.5) 100%);

`;

type ModalProps = {
  children: ReactNode,
  isActive: boolean
}

function ModalFrame({children, isActive}: ModalProps) {
  if (isActive) {
    return <Frame>{children}</Frame>;
  } else {
    return <></>;
  }
}

export default ModalFrame;