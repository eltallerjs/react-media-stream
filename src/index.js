import React from 'react'
import styles from './styles.module.css'
import { ReactFlvPlayer } from 'react-flv-player'

export const MediaLiveStream = ({ url }) => {
  return (
    <div>
      <ReactFlvPlayer 
        url = {url}
        heigh = "800px"
        width = "800px"
        isMuted={true}
      />
    </div>
  )
}
