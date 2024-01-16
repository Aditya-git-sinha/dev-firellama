import React, { useRef, useEffect } from 'react';

const canvasStyles = {
  display: 'block',
  background: '#FFF',
};

const DustParticles = (props) => {
  const canvasRef = useRef(null);
  let image = new Image();
  let particlesArray = [];
  const mouse = {
    x: null,
    y: null,
    radius: 100
  };

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.size = 1.5;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 30) + 1;
      this.color = color;
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      let directionX = forceDirectionX * force * this.density * 0.6;
      let directionY = forceDirectionY * force * this.density * 0.6;

      if (distance < maxDistance) {
        this.x += directionX;
        this.y += directionY;
      } else {
        let deltaX = this.x - this.baseX;
        let deltaY = this.y - this.baseY;
        let distanceBase = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        let baseForce = distanceBase * this.density * 0.02;

        if (distanceBase > 1) {
          this.x -= deltaX / distanceBase * baseForce;
          this.y -= deltaY / distanceBase * baseForce;
        } else {
          this.x = this.baseX;
          this.y = this.baseY;
        }
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      if (props.encodedImageData && image.complete) {
        initParticlesFromImage();
      }
    }

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => {
        particle.draw(ctx);
        particle.update(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const createParticlesFromData = (pixelData) => {
      particlesArray = [];
      for (let y = 0; y < pixelData.height; y += 4) {
        for (let x = 0; x < pixelData.width; x += 4) {
          const i = (y * 4 * pixelData.width) + (x * 4);
          if (pixelData.data[i + 3] > 128) {
            const red = pixelData.data[i];
            const green = pixelData.data[i + 1];
            const blue = pixelData.data[i + 2];
            const color = `rgba(${red},${green},${blue})`;
            particlesArray.push(new Particle(x, y, color));
          }
        }
      }
    }

    const initParticlesFromImage = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      if (image.width > 0 && image.height > 0) {
        ctx.drawImage(image, 0, 0);
        const pixelData = ctx.getImageData(0, 0, image.width, image.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createParticlesFromData(pixelData);
        animate();
      }

    }

    window.addEventListener('resize', resizeCanvas);

    const initParticles = () => {
      image.src = `data:image/png;base64,${props.encodedImageData.trim()}`;
      image.onload = initParticlesFromImage
    };

    initParticles();

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      });
      window.removeEventListener('mouseout', () => {
        mouse.x = undefined
        mouse.y = undefined;
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, [props.encodedImageData]); // Only re-run the effect if new imageData comes in

  return <canvas ref={canvasRef} style={canvasStyles} />;
};

export default DustParticles;