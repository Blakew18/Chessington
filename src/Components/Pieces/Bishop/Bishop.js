import React from 'react';
import { useStores } from '../../RootStoreProvider';
import { observer } from 'mobx-react';

import { DragPreviewImage, useDrag } from 'react-dnd';

import './Bishop.css';
import poncBishop from './icons/PONC_Bishop.svg'
import pocBishop from './icons/POC_Bishop.svg'
import realBishop from '../YEETGALE.jpg'

const Bishop = observer(({ squareState={squareState}, currentPos={currentPos}}) => {
  const objectTest = {name: squareState}
  const rootStore= useStores();
  
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: objectTest.name, currentPos: currentPos},

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
      case squareState === "B":
        return poncBishop
      case squareState === "b":
        return pocBishop
      default:
        return null
    }
  }

  return (
    <>
      <DragPreviewImage connect={preview} src={realBishop} />
      <img src={getColour(squareState)} 
           alt={squareState} 
           className="bishop" 
           ref={drag}
           onMouseDown={getLegalMoves}/>
    </>
  )
});

export default Bishop;