import React, { useState, useEffect } from 'react';
import './App.css';
import { setupRootStore } from '../../Models/root-store'; 
import { RootStoreProvider } from '../RootStoreProvider';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Board from '../Board/Board'
import GameInfo from '../GameInfo/GameInfo'

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
      <DndProvider backend={HTML5Backend}>
        <RootStoreProvider value={rootStore}>
          <h1>CHESSINGTON</h1>
          <Board />
          <GameInfo />
        </RootStoreProvider>
      </DndProvider>
    </div>
  );
}

export default App;
