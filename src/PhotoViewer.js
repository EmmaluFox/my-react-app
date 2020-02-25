import React from "react";  // import React (to provide access to JSX)
import "./PhotoViewer.css";




function PhotoViewer(props) {    // declare a new function called 'PhotoViewer'
const photos = ["https://images.unsplash.com/photo-1510534638550-854751122e98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1518842013791-b874be246c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1572274738401-abf0ce8c05ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"];
var image;
var altText;
var listPhotos = [];
for (let i=0; i<photos.length; i++) {
    image = photos[i];
    altText = "random"+i;
    listPhotos.push(<img src={image} className = "thumbnails" alt={altText}/>);
    }


    return (
        <div className = "photos">          
      {/*<img className = "heroImage" src={PhotoViewer.props} alt={"random"}/>*/}
        <div className = "photoList">
          <li>{listPhotos}</li>
        </div>
    </div>
);
}

export {PhotoViewer};       // Export the function so that it can be imported in other files
