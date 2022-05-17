import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });
  // DESTRUCTURED VERSION of THE CODE BELOW
  // const images = props.images.map(image => {
  //   return <img key={image.id} src={image.urls.regular} alt={image.description} />
  // });

  return <div className={"image-list"}>{images}</div>;
};

export default ImageList;
