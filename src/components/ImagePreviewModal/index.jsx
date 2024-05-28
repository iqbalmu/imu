/* eslint-disable react/prop-types */
import { useState } from 'react';
import './image-preview-modal.scss';

function ImagePreviewModal({ images, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="preview-container">
          <img src={images[currentImageIndex]} alt="Preview" className="preview-image" />
          <div className="slider-controls">
            <div className="arrow prev" onClick={prevImage}>&#10094;</div>
            <div className="arrow next" onClick={nextImage}>&#10095;</div>
          </div>
        </div>
        <div className="image-list">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index}`}
              className={index === currentImageIndex ? 'active' : ''}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagePreviewModal;
