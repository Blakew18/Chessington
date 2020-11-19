import React from 'react';
import { useStores } from '../../RootStoreProvider';
import { observer } from 'mobx-react';

import { DragPreviewImage, useDrag } from 'react-dnd';

import './Queen.css';
import poncQueen from './icons/poncQueen.svg'
import pocQueen from './icons/pocQueen.svg'
import realQueen from './icons/YEETGALE.jpg'

const Queen = observer(({ squareState={squareState}}) => {
  const objectTest = {name: 'Q'}
  const rootStore= useStores();
  
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: objectTest.name },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      piece: squareState,

    })
  });


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
      <img src={getColour(squareState)} alt={squareState} className="queen" ref={drag}/>
    </>
  )
});

export default Queen;