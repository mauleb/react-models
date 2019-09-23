import React, { useContext, useState, useMemo } from 'react';

const ModelContext = React.createContext({});

export const buildModel = ({
  state: initialState,
  select,
  actions
}) => {
  const key = Symbol();

  const modelHook = (param={}) => {
    const { root, setRoot } = useContext(ModelContext);

    if (root[key] === undefined) {
      setRoot({ ...root, [key]: initialState });
      return [[],{}];
    }

    const state = root[key];
    const replaceState = (newState) => setRoot(prev => ({ ...prev, [key]: newState }));

    const selectResults = select(state, param);
    const mappedActions = actions(state, replaceState);

    return [selectResults, mappedActions];
  }

  return modelHook;
}

export const ModelProvider = ({ children }) => {
  const [root, setRoot] = useState({});
  const ctx = useMemo(() => ({ root, setRoot }), [root, setRoot]);
  return (
    <ModelContext.Provider value={ctx}>
      {children}
    </ModelContext.Provider>
  )
}