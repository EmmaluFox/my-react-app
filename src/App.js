import React, {useState} from 'react';
import './App.css';
import {PhotoViewer} from "./PhotoViewer";
import {getImages} from "./GetImages";

function App() {
    const imageUrls = getImages();
    const [selectedUrl, setSelectedUrl] = useState(imageUrls[0]);
  return (
      <div>
        <h1 className={"heading"}>React Photo Viewer</h1>
        <PhotoViewer  className = "image" src={"https://picsum.photos/600"}/>
      </div>
  );
}

export default App;
