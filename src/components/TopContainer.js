import React, { useEffect } from 'react';
import '../css/TopContainer.css'; // Make sure to have the correct path to your CSS file
import LaptopComponent from './LaptopDisplay';

// Inner component to handle bubble creation, moved outside of TopContainer
const BubbleBackground = () => {
  useEffect(() => {
    // Function to create a single bubble
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      const colors = ['#e27d60', '#85dcb0', '#e8a87c', '#c38d9e', '#41b3a3'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.style.backgroundColor = randomColor;

      const size = Math.random() * (120 - 20) + 20;
      const startPositionX = Math.random() * 100;
      const endPositionX = startPositionX + (Math.random() * 80 - 40);
      const horizontalShift = endPositionX - startPositionX;
      const duration = Math.random() * 15 + 10;

      bubble.style.setProperty('--horizontal-shift', `${horizontalShift}vw`);
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${startPositionX}vw`;
      bubble.style.animation = `riseAndDrift ${duration}s linear infinite`;

      const bubbleContainer = document.querySelector('.top-container');
      bubbleContainer.appendChild(bubble);

      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };

    // Create an initial set of bubbles
    const initialBubbleCount = 20; // Number of bubbles you want to start with
    for (let i = 0; i < initialBubbleCount; i++) {
      createBubble();
    }

    // Set up an interval to create bubbles periodically
    const intervalId = setInterval(createBubble, 2000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // Since we are manipulating the DOM directly, we don't need to return any JSX
};

function TopContainer() {
  return (
    <div className="top-container">
      <BubbleBackground />
      <LaptopComponent />
    </div>
  );
}

export default TopContainer;