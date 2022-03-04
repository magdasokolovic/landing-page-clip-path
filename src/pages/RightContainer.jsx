import React from 'react'
import CommonContainer from './CommonContainer'
import {videoData} from '../data'
import VideoPlayer from './VideoPlayer'

export default function RightContainer() {
  return (
    <CommonContainer mediaData={videoData} position="right" title="Film" render={(media)=>(
      <div className="container container-right">
        <VideoPlayer src={media.mediaUrl}/>
        <h1 className="container-big-title">{media.title}</h1>
      </div>
    )}></CommonContainer>
  )
}
