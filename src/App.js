import React, {useState} from 'react';
import {PhotoViewer} from "./PhotoViewer";
import {PhotoSelector} from "./ChoosePhoto";
import {ImageUrls} from "./GetImages";
import './PhotoViewer.css';

function App() {
    const [selectedUrl, setSelectedUrl] = useState(ImageUrls[0]);

    return (
        <div className="App">
            <h1>React Photo Viewer</h1>
            <PhotoViewer  src={selectedUrl}/>
            <PhotoSelector selectedUrl={selectedUrl} setSelectedUrl={setSelectedUrl}/>
        </div>
    );
}

export default App;
