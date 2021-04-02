import React from 'react';
import { useStores } from '../../RootStoreProvider';
import { observer } from 'mobx-react';

import { DragPreviewImage, useDrag } from 'react-dnd';

import './Knight.css';
import poncKnight from './icons/PONC_Knight.svg'
import pocKnight from './icons/POC_Knight.svg'
import realKnight from '../YEETGALE.jpg'

const Rook = observer(({ squareState={squareState}, currentPos={currentPos}}) => {
  const objectTest = {name: squareState}
  const rootStore= useStores();
  
  const [{ isDragging }, drag, preview] = useDrag({
    end: (item, monitor) => (rootStore.clearLegalMoves()),
    item: { type: objectTest.name, currentPos: currentPos },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      piece: squareState,

    })
  });

  const getLegalMoves = () => {
    rootStore.getLegalMoves(squareState, currentPos);  
  }

  const getColour = (squareState) => {
    switch (true){
      case squareState === "N":
        return poncKnight
      case squareState === "n":
        return pocKnight
      default:
        return null
    }
  }

  return (
    <>
      <DragPreviewImage connect={preview} src={realKnight} />
      <img src={getColour(squareState)} 
           alt={squareState} 
           className="knight" 
           ref={drag}
           onMouseDown={getLegalMoves}/>
    </>
  )
});

export default Rook;