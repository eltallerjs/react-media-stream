import React from 'react'

import { MediaLiveStream } from 'react-media-stream'
import 'react-media-stream/dist/index.css'

const App = () => {
  return (<MediaLiveStream url="http://localhost:8000/live/SYSTEC.flv" />);
}

export default App
