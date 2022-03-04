import React from 'react'
import CommonContainer from './CommonContainer'
import {imageData} from '../data'
import ImagePlayer from './ImagePlayer'

export default function LeftContainer() {
  return (
    <CommonContainer mediaData={imageData} position="left" title="Photo" render={(media)=>(
      <div className="container container-left">
        <ImagePlayer src={media.mediaUrl}/>
        <h1 className="container-big-title">{media.title}</h1>
      </div>
    )}></CommonContainer>
  )
}
