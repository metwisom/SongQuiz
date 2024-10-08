import Link from 'next/link';
import styled from 'styled-components';
import SongInBase from '@/components/songInBase/songInBase';
import AuthForm from '@/components/authForm';
import {useAppState} from '@/lib/AppState';
import ModalFrame from '@/components/modalFrame';
import {useState} from 'react';
import AudioPlayer from '@/components/audioPlayer';

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


  return <div>
    <SongInBase/>

    <AudioPlayer audioUrl={'/files/a0d9fd3ee8f80b35e2df3a01d1ef784d.mp3'}/>
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