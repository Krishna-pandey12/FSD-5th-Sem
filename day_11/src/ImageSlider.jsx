import React,{useState,useEffect} from 'react'

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const images =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3vVkyDT_vQ78GFqTFimQf7Nw7J9fAUHAmP9D6zSOtQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIlYsGV6iKsIVHO2cyjadylgZfiNOdBixeOaJYmJiFQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkcxTbgibs_EcEr5LJe9N6bGEnxmdNfe0hXKq-OdL0A&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Yubg0W0YIMscWP2g8giMvr1Rcg7nncEKk1V21HclLA&s=10"

    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div>
        <h1>Image Slider</h1>
        <img
            src={images[index]}
            alt="img-here"
            style={{ width: "300px", height: "300px" }}
        ></img>    
      
    </div>
  )
}

export default ImageSlider