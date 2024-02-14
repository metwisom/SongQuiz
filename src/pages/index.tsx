import Link from 'next/link';
import styled from 'styled-components';
import SongInBase from '@/components/songInBase/songInBase';
import AuthForm from '@/components/AuthForm';
import {useAppState} from '@/lib/AppState';
import ModalFrame from '@/components/modalFrame';
import {useState} from 'react';
import Player from '@/components/player';

type IndexProps = {
  a:string
}

const Button = styled(Link)`
  background: #3dc58c;
  border-radius: 10px;
  border: 1px solid red;
  cursor: pointer;
`


export default function Index({a}: IndexProps) {

  const [isActive,setIsActive] = useState(false)

  const {token, setNewToken} = useAppState();
  return <div>
    {token}
    <SongInBase/>
    <ModalFrame isActive={isActive}>
      <AuthForm/>
    </ModalFrame>
    <Player/>
    <button onClick={() => setIsActive(!isActive)} >Войти</button>
    <h1>Hello, s!11 - {a}</h1>
    <Button href={'/test'}>Тест</Button>
  </div>
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {a:3}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: data
  }
}