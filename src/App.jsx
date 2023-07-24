import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header'
import Video from './components/Video';
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/farmanali6349/video-data/master/tiktok-videos/data.json')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <main>
      <div className='outer'>
        <Header />
        <section className="container">
          {videos.map(singleVideo => <Video 
          url={singleVideo.url}
          channel = {singleVideo.channel} 
          description = {singleVideo.description}
          audio = {singleVideo.audio}
          />)}
        </section>
      </div>
    </main>
  );
}

export default App;
