import React from 'react'

const Imageslider = () => {
  const images=["https://images.pexels.com/photos/33915135/pexels-photo-33915135.jpeg","https://images.pexels.com/photos/35678159/pexels-photo-35678159.jpeg","https://images.pexels.com/photos/36462109/pexels-photo-36462109.jpeg","https://www.pexels.com/photo/beautiful-close-up-of-purple-wildflowers-in-bloom-38007128/"]
  return (
    <div style={{textAlign:"center"}}>
     <h1 style={{backgroundColor:"blue",color:"white"}}> ImageSlider</h1>
     <img src={images[2]}
     style={{height:"200px",width:"200px"}}></img><br></br>
     <button>Left</button>
     <button>Right</button>
    </div>
  )
}

export default Imageslider
