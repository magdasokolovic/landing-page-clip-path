import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import CursorManager from '../CustomCursor/CursorManager'
import CustomCursor from "../CustomCursor"
import "../styles/reset.scss"
import "../styles/home.scss"

export default function Index() {
  return (
    <CursorManager>
      <div className="main-container">
        <CustomCursor/>
        <div className="hover-left" />
        <div className="hover-right" />
        <LeftContainer />
        <RightContainer />
        <h1 className="center-text">STORIES</h1>
      </div>
    </CursorManager>
  );
}
