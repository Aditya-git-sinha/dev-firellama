import React, { useEffect } from 'react';
import '../css/TopContainer.css'; // Make sure to have the correct path to your CSS file
import LaptopComponent from './LaptopDisplay';

function TopContainer() {
  // Inner component to handle bubble creation
  const BubbleBackground = () => {
    useEffect(() => {
      const createBubble = () => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const colors = ['#e27d60', '#85dcb', '#e8a87c', '#c38d9e', '#41b3a3'];
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

      const intervalId = setInterval(createBubble, 2000);

      return () => clearInterval(intervalId);
    }, []);

    return null; // Since we are manipulating DOM directly, we don't need to return any JSX
  };

  return (
    <div className="top-container">
      <BubbleBackground />
      {/* <h1 className="business-tagline">
        Crafting Code to Color Your Company's Canvas!
        Crafting Code to Color Your Company's Canvas!
        Crafting Code to Color Your Company's Canvas!
        Crafting Code to Color Your Company's Canvas!
        Crafting Code to Color Your Company's Canvas!
      </h1> */}
      <LaptopComponent/>
      {/* ... rest of your content ... */}
    </div>
  );
}

export default TopContainer;