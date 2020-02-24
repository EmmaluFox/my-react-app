import React, {useState} from 'react';
import './App.css';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {ImageUrls} from "./GetImages/GetImages";

function App() {
    const [selectedUrl, setSelectedUrl] = useState(ImageUrls[0]);
  return (
      <div>
        <h1 className={"heading"}>React Photo Viewer</h1>
        <PhotoViewer  className = "image" src={"https://picsum.photos/600"}/>
      </div>
  );
}

export default App;
