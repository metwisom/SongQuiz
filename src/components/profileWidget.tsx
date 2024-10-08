import styled from 'styled-components';
import {useAppState} from '@/lib/AppState';
import {ReactNode, useState} from 'react';
import ModalFrame from '@/components/modalFrame';
import AuthForm from '@/components/authForm';

const Block = styled.div`
  background-color: #d8c152;
  border-radius: 3px;
  float: right;
  width: 200px;
  height: 50px;
  position: absolute;
  right: 5px;
  top: 5px;
`

function Hidder({active,children}:{active:boolean,children:ReactNode}){
  if(active){
    return <>{children}</>
  }
  return <></>
}

const Avatar = styled.img`
  border-radius: 3px;
  border: 1px solid #232323;
  margin: 10px;
  width: 30px;
  height: 30px;
  background: #fff;
`

function ProfileWidget(){

  const [isActive,setIsActive] = useState(false)
  const {token, setNewToken} = useAppState();

  return <Block>
    <Hidder active={token === ''}>
      <ModalFrame isActive={isActive}>
        <AuthForm/>
      </ModalFrame>
      <button onClick={() => setIsActive(!isActive)} >Войти</button>
    </Hidder>
    <Hidder active={token !== ''}>
      <Avatar src={'next.svg'}/>
      {token}
    </Hidder>
  </Block>
}

export {ProfileWidget}