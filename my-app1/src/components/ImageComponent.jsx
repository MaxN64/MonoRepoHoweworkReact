import React from 'react'

const ImageComponent = () => {
  return (
    <div>
        <h2>Картинка</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/11.png`}
        alt=""
        style={{
            width: '600px',      
            height: '500px'      
          }}
      />
      
    </div>
  )
}

export default ImageComponent
