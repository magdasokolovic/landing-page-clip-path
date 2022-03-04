import React, {useEffect, useState} from 'react'

export default function ImagePlayer({src}) {
  const [stateSrc, setStateSrc] = useState(src)
  const [fade, setFade] = useState("fade-out")

  useEffect(()=>{
    setFade("fade-out")
    setTimeout(()=>{
      setStateSrc(src)
    }, 300)
    setTimeout(()=>{
      setFade("fade-in")
    }, 500)
  }, [src])

  useEffect(() => {
    setTimeout(()=>{
      setFade("fade-in")
    }, 500)
  }, [])

  return (
    <div className={`image-player fade ${fade}`} style={{backgroundImage: `url(${src})`}}>

    </div>
  )
}
