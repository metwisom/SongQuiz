import {Button, Input} from '@/components/styles';
import styled from 'styled-components';
import React, {useRef} from 'react';
import {Transport} from '@/lib/transport';
import {useAppState} from '@/lib/AppState';

const Form = styled.form`
  width: 100%
`;

type AuthResponse = {
  token: string
}

export default function AuthForm() {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const {token, setNewToken} = useAppState();
  const takeAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;
    Transport.post<AuthResponse>('/api/user/auth', {login, password})
    .then(e => {
      setNewToken(e.token);
    });

  };
  return <Form>
    <Input ref={loginRef} placeholder={'Логин'} name={'login'}/>
    <Input ref={passwordRef} placeholder={'Пароль'} name={'password'}/>
    <Button onClick={takeAuth}>Вход</Button>
  </Form>;
}