import React, {useState, useEffect} from 'react'

export default function VideoPlayer({src}) {
  const [stateSrc, setStateSrc] = useState(src)
  const [fade, setFade] = useState("fade-out")

  useEffect(()=>{
    setFade("fade-out")
    setTimeout(()=>{
      setStateSrc(src)
    }, 500)
    setTimeout(()=>{
      setFade("fade-in")
    }, 1000)
  }, [src])

  useEffect(() => {
    setTimeout(()=>{
      setFade("fade-in")
    }, 1000)
  }, [])

  return (
    // <iframe title={src} src={src} className="resp-iframe "width="640" frameborder="0" height="360" allowfullscreen mozallowfullscreen allow="autoplay; fullscreen" controls="0">

    // </iframe>
    <div className={`resp-iframe fade ${fade}`} style={{backgroundImage: `url(${stateSrc})`}}>

    </div>
  )
}
