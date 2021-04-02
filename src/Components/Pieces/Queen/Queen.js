import React from 'react';
import { useStores } from '../../RootStoreProvider';
import { observer } from 'mobx-react';

import { DragPreviewImage, useDrag } from 'react-dnd';

import './Queen.css';
import poncQueen from './icons/PONC_Queen.svg'
import pocQueen from './icons/POC_Queen.svg'
import realQueen from '../YEETGALE.jpg'

const Queen = observer(({ squareState={squareState}, currentPos={currentPos}}) => {
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
      case squareState === "Q":
        return poncQueen
      case squareState === "q":
        return pocQueen
      default:
        return null
    }
  }

  return (
    <>
      <DragPreviewImage connect={preview} src={realQueen} />
      <img src={getColour(squareState)} 
      alt={squareState} 
      className="queen" 
      ref={drag}
      onMouseDown={getLegalMoves}/>
    </>
  )
});

export default Queen;