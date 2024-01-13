import React, { useRef, useEffect } from 'react';

const DustParticles = (props) => {
    const canvasRef = useRef(null);
    const particlesArray = useRef([]);

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

        update(ctx) {
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
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function initParticlesFromImage(imageData) {
            const image = new Image();
            image.src = `data:image/png;base64,${imageData}`;
            image.onload = () => {
                ctx.drawImage(image, 0, 0);
                const pixelData = ctx.getImageData(0, 0, image.width, image.height);
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (let y = 0; y < pixelData.height; y += 4) {
                    for (let x = 0; x < pixelData.width; x += 4) {
                        const i = (y * 4 * pixelData.width) + (x * 4);
                        if (pixelData.data[i + 3] > 128) {
                            const red = pixelData.data[i];
                            const green = pixelData.data[i + 1];
                            const blue = pixelData.data[i + 2];
                            const color = `rgba(${red},${green},${blue})`;
                            particlesArray.current.push(new Particle(x, y, color));
                        }
                    }
                }
                animate();
            };
        }

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };

        const handleMouseOut = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.current.length; i++) {
                particlesArray.current[i].draw(ctx);
                particlesArray.current[i].update(ctx);
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particlesArray.current = [];
            initParticlesFromImage(props.encodedImageData);
        };

        window.addEventListener('resize', handleResize);

        initParticlesFromImage(props.encodedImageData);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', handleResize);
        };

    }, [props.encodedImageData]);

    return <canvas ref={canvasRef} className={props.className} style={{ display: 'block', background: '#FFF' }} />;
};

export default DustParticles;