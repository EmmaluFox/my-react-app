﻿import React, {useState} from 'react';
import '../PhotoViewer/PhotoViewer.css';


const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImages() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://i.picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

export {getImages};
export const ImageUrls = getImages();