import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


function ImageCropper({ src, onImageLoaded, crop, onCropChange, onCropImage }) {
  return (
    <div >
      {src && (
        <div style={{textAlign: "center"}}>
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={onImageLoaded}
            onChange={onCropChange}
          />
          <br />
        </div>
      )}
    </div>
  );
}

export default ImageCropper;