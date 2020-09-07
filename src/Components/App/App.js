import React, { useState, useEffect } from 'react';
import './App.css';
import Board from '../Board/Board'
import { setupRootStore } from '../../Models/root-store'; 
import { RootStoreProvider } from '../RootStoreProvider';

function App() {
  
  const [rootStore, setRootStore] = useState();

  
  useEffect(() => {

    if (rootStore) return;
    setupRootStore()
      .then((rs) => {
        setRootStore(rs);
      })
      .catch((err) => {
        console.log('failed to initialize root store');
        console.log(err)
      });
  }, [rootStore]);

  if (!rootStore) return <></>;
  
  return (
    <div className="App">
      <RootStoreProvider value={rootStore}>
        <Board />
      </RootStoreProvider>
    </div>
  );
}

export default App;
