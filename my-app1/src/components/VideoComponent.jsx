import React from 'react'

const VideoComponent = () => {
  return (
    <div>
      <video
        src={`${process.env.PUBLIC_URL}/videos/11.mp4`}
        controls
        style={{ maxWidth: '100%' }}
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  )
}

export default VideoComponent
