﻿import React, {ReactPropTypes as PropTypes, useState} from "react";
import 'src/PhotoViewer/PhotoViewer.css';
import {ImageUrls} from 'src/GetImages/GetImages.js';
import "src/GetImages.GetImages.js"

function Thumbnail(props) {
    const cssClass = "thumbnail-image" + (props.isSelected ? " selected" : "");

    return <img data-testid = "testThumbnail" className={cssClass} src={props.src} alt={""}/>
}

Thumbnail.propTypes = {
    src: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export { Thumbnail };