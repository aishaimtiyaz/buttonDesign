import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ImageGokul from '../assets/GokulChhabra.webp';
import { FaAward, FaUserGraduate, FaClock } from 'react-icons/fa';
import PrimaryBtn from './common/PrimaryBtn';

const AboutMentor = () => {
  const canvasRef = useRef(null);
  
  // Animation for the statue/image
// ... existing code ...
const imageVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
// ... existing code ...

  // Animation for text fade-in
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.5
      } 
    }
  };
  
  // Create starry background with canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = 300;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.8})`,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize
    setCanvasDimensions();
    initParticles();
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
      setCanvasDimensions();
      initParticles();
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      
      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8 md:py-0">
        {/* Left side - Moving image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 order-1">
          <motion.div
            variants={imageVariants}
            animate="animate"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] relative"
          >
            <img 
              src={ ImageGokul } 
              alt="Gokul Chhabra" 
              className="w-full h-full object-contain mix-blend-screen"
            />
          </motion.div>
        </div>

        {/* Right side - Text content */}
        <motion.div 
          className="w-full md:w-1/2 text-white relative order-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* "about mentor" text with lower opacity in background */}
          <h2 className="absolute text-gray-600/30 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide md:-top-18 -left-2 -z-10">
            About Mentor
          </h2>
          
          {/* Main content with higher z-index */}
          <div className="relative z-10 mt-16 md:mt-0">
            <h1 className="bg-gradient-to-r from-gray-300 via-yellow-500 to-amber-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">Gokul Chhabra</h1>
            
            <p className="text-gray-300 mb-6 md:mb-8 max-w-xl text-base sm:text-lg font-sans">
              Gokul Chhabra, a SEBI Registered Research Analyst, is a dynamic Angel Investor, CEO of multi-million dollar companies, and a recognized Social Entrepreneur by Godrej. With an MBA from MDI and BCOM from Ramjas, he is a top-rated Financial Analyst at just 27.
            </p>

            <p className="text-gray-300 mb-6 md:mb-8 max-w-xl text-base sm:text-lg font-sans">
              As a full-time Trader and Investor, he has mentored over 1 million students, empowering 500,000+ traders through his "Zero To Hero Program" and advanced price action strategies. Join us in this journey of financial growth and innovation with our visionary leader.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base">
              <div className="flex items-center text-gray-300">
                <FaClock className="mr-2 text-lg text-yellow-500" />
                <span className="font-sans">5+ years of experience</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaAward className="mr-2 text-lg text-yellow-500" />
                <span className="font-sans">Awards</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaUserGraduate className="mr-2 text-lg text-yellow-500" />
                <span className="font-sans">50,000+ student community</span>
              </div>
            </div>
           <PrimaryBtn
                text="Join to grow Together"
                widthSize="w-[50%]"
                py="py-4"
                px="px-10"
                fromClr="from-sky-500"
                viaClr="via-lime-400"
                toClr="to-lime-700"
                textColor="text-gray-900" // Set text color to white
                borderColor="border-lime-700" //set border color
/>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMentor;
