import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {readFromLocalStorage} from '@/lib/localStorage';

// Определение типа для состояния
type AppStateType = {
  token: string | null;
  setNewToken: Dispatch<SetStateAction<string>>;
};

// Создание контекста
const AppStateContext = createContext<AppStateType>({} as AppStateType);

// Компонент-провайдер, который обеспечивает доступ к глобальному состоянию
export const AppStateProvider = ({children}: { children: ReactNode }) => {
  const [token, setNewToken] = useState('');

  useEffect(() => {
    setNewToken(readFromLocalStorage('token') ?? '')
  }, []);

  return (
    <AppStateContext.Provider value={{token, setNewToken}}>
      {children}
    </AppStateContext.Provider>
  );
};

// Хук для использования состояния в компонентах
export const useAppState = () => {
  const context = useContext(AppStateContext);

  return context;
};
