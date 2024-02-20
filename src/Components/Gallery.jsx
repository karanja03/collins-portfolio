


import React, { useEffect, useState } from 'react';

const DoggoGallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/galleryImages'); // Adjust the port and host if needed
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);

  const galleryStyles = {
    backgroundColor: '#366A81',
  };
  const  imgContainerStyle={
    backgroundColor:'#12232B'
    
  }
  

  return (
    <div className='gallerybody ' style={galleryStyles}>
      <h1 className='animated-underline mt-12 mb-14 '>MY GALLERY</h1>
      <div className="grid-container">
        {galleryData.map((image) => (
          <div key={image.id} style={imgContainerStyle}>
            <img className={`grid-item grid-item-${image.id}`} src={image.url} alt={`Image ${image.id}`} />
            <p className='text-white'>{`"Caption for Image ${image.id}"`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoggoGallery;
