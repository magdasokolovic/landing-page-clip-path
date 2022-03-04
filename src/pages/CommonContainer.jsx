import React, { useState, useContext } from "react";
import cn from "classnames"
import {CursorContext} from "../CustomCursor/CursorManager"

export default function CommonContainer(props) {
    const [first] = props.mediaData
    const [activeMedia, setActiveMedia] = useState(first)
    const {setSize} = useContext(CursorContext)

  return (
    <>
        <div className={`navigation ${props.position}`}>
        <h2>{props.title}</h2>
        <ul>
            {props.mediaData.map((media, index) =>(
                <li key={index} className={cn({active: media.mediaUrl === activeMedia.mediaUrl})} onMouseEnter={()=>{
                    setSize("regular");
                    setActiveMedia(media)
                }} onMouseLeave={()=>{setSize("small")}}>{media.title}</li>
            ))}
        </ul>
        </div>
        {props.render(activeMedia)}
    </>
  )
}
