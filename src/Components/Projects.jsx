import React, { useEffect, useState } from 'react';

const fetchCardData = async () => {
  try {
    const response = await fetch('http://localhost:3001/cards'); // Adjust the URL based on where your db.json is being served from
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data; // Assuming the structure is directly an array of cards
  } catch (error) {
    console.error("Failed to fetch card data:", error);
    return [];
  }
};

const Projects = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCardData().then(setCards);
  }, []);

  return (
    <div className='pt-24'>
    <div className="wrapper  ">
        <div>
      <h1>MY RECENT PROJECTS</h1>
      </div>
      <div className="cols">
        {cards.map((card) => (
          <div key={card.id} data-id={card.id} className={`col`}>
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${card.imageUrl})` }}>
                <div className="inner">
                  <p>{card.title}</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
