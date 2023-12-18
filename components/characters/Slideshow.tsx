"use client"

import React, { useState, useEffect } from 'react';

const ThumbnailGallery = ({ cases, onChangeCase, selectedButton, setSelectedButton }) => {
  const handleButtonClick = (index) => {
    if (index === selectedButton) {
      // If the same button is clicked, reset to the first slide and data
      onChangeCase(0);
      setSelectedButton(0);
    } else {
      // Change to the selected case
      onChangeCase(index);
      setSelectedButton(index);
    }
  };

  return (
    <div className="m-10 mt-5 lg:mt-5 thumbnail-gallery flex justify-center space-x-4">
      <button
        className={`uppercase thumbnail-button text-white p-2 rounded border-2 border-red-800 hover:bg-red-800 ${
          selectedButton === 0 ? 'bg-red-800' : ''
        }`}
        onClick={() => handleButtonClick(0)}
      >
        Neo Tokyo
      </button>
      <button
        className={`uppercase thumbnail-button text-white border-2 border-red-800 p-2 rounded hover:bg-red-800 ${
          selectedButton === 1 ? 'bg-red-800' : ''
        }`}
        onClick={() => handleButtonClick(1)}
      >
        Ancient Egypt
      </button>
      <button
        className={`uppercase thumbnail-button border-2 text-white border-red-800 p-2 rounded hover:bg-red-800 ${
          selectedButton === 2 ? 'bg-red-800' : ''
        }`}
        onClick={() => handleButtonClick(2)}
      >
        21st Century
      </button>
    </div>
  );
};

const Slideshow = () => {
  const [cases, setCases] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0); // Initialize with the first button

  useEffect(() => {
    // Fetch data from /data/NeoTokyo.json initially
    fetchData('/data/NeoTokyo.json');
  }, []); // Empty dependency array ensures this runs only once on component mount

  const fetchData = async (casePath) => {
    try {
      const response = await fetch(casePath);
      const data = await response.json();
      setCases(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cases.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cases.length - 1 : prevIndex - 1));
  };

  const changeCase = async (index) => {
    // Set currentIndex to 0 before fetching new data
    setCurrentIndex(0);

    // Determine the path based on the selected case
    let casePath;

    switch (index) {
      case 0:
        casePath = '/data/NeoTokyo.json';
        break;
      case 1:
        casePath = '/data/AncientEgypt.json';
        break;
      case 2:
        casePath = '/data/Century.json'; // Adjust the path for the 21st Century
        break;
      default:
        // Handle unexpected cases
        console.error('Invalid case index:', index);
        return;
    }

    try {
      const response = await fetch(casePath);
      const data = await response.json();
      setCases(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setSelectedButton(index); // Update the selected button after fetching new data
  };

  if (cases.length === 0) {
    // Data is still loading
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="mt-10 text-center text-red-800 text-4xl font-black lg:mt-32">MAIN CHARACTERS</h1>

      {/* Thumbnail Gallery */}
      <ThumbnailGallery
        cases={cases}
        onChangeCase={changeCase}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <div className="md:w-2/4 slideshow-container mx-auto relative text-red-800 lg:w-1/4 lg:mt-10 flex items-center">
        <button onClick={prevSlide} className="mr-4 md:block text-3xl">
          &#10094;
        </button>
        <div className="slide relative">
          <img src={cases[currentIndex].image} alt={cases[currentIndex].name} className="w-full" />
          <h3 className="text-red-800 uppercase text-center text-2xl font-bold mt-4">
            {cases[currentIndex].name}
          </h3>
          <p className="uppercase text-center text-gray-300">{cases[currentIndex].description}</p>
        </div>
        <button onClick={nextSlide} className="ml-4 md:block text-3xl">
          &#10095;
        </button>
      </div>

      {/* Navigation buttons for mobile */}
      <div className="mobile-buttons flex justify-between mt-4 md:hidden">
        <button onClick={prevSlide} className="mobile-button" aria-label="Previous">
          &#10094;
        </button>
        <button onClick={nextSlide} className="mobile-button" aria-label="Next">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
