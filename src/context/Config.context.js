import {h, createContext } from 'preact';
import { useContext, useEffect, useMemo } from 'preact/compat';

const configContext = createContext(undefined);
export const ConfigContextProvider = configContext.Provider;

export const useConfigContext = () => {
  const value = useContext(configContext);

  if (!value) {
    throw new Error('You need to wrap your component with ConfigContextConnected');
  }

  return value;
};

export const ConfigContextConnected = ({ config, children }) => {

  const value = useMemo(
    () => ({
      config
    }),
    [config]
  );

  return <ConfigContextProvider value={value}>{children}</ConfigContextProvider>;
};
