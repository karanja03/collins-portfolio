


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


  return (
    <div className='gallerybody pt-44  ' style={{ backgroundColor: '#2E3338' }}>
      <h1 className='animated-underline  mb-20 text-5xl   text-white'>MY GALLERY</h1>
      <div className="grid-container">
        {galleryData.map((image) => (
          <div key={image.id} >
            <img className={`grid-item grid-item-${image.id}`} src={image.url} alt={`Image ${image.id}`} />
            <p className='text-white'>{`"Caption for Image ${image.id}"`}</p>
          </div>
        ))}
      </div>
      <p className='text-white ml-auto mr-20 pt-12 pb-4 text-2xl'>SEE MORE?</p>
    </div>
  );
};

export default DoggoGallery;
