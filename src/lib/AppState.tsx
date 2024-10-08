import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from 'react';
import {Storage} from '@/lib/localStorage';

type AppStateType = {
  token: string | null;
  setNewToken: Dispatch<SetStateAction<string>>;
};

const AppStateContext = createContext<AppStateType>({} as AppStateType);

export const AppStateProvider = ({children}: { children: ReactNode }) => {
  const [token, setNewToken] = useState('');

  useEffect(() => {
    setNewToken(Storage.read('token') ?? '')
  }, []);

  return (
    <AppStateContext.Provider value={{token, setNewToken}}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
