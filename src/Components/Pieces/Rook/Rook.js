import React from 'react';
import { useStores } from '../../RootStoreProvider';
import { observer } from 'mobx-react';

import { DragPreviewImage, useDrag } from 'react-dnd';

import './Rook.css';
import poncRook from './icons/PONC_Rook.svg'
import pocRook from './icons/POC_Rook.svg'
import realRook from '../YEETGALE.jpg'

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
      case squareState === "R":
        return poncRook
      case squareState === "r":
        return pocRook
      default:
        return null
    }
  }

  return (
    <>
      <DragPreviewImage connect={preview} src={realRook} />
      <img src={getColour(squareState)} 
           alt={squareState} 
           className="rook" 
           ref={drag}
           onMouseDown={getLegalMoves}/>
    </>
  )
});

export default Rook;