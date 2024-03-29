import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SIZE = 1440;

/**
 * @author https://codesandbox.io/p/sandbox/framer-motion-mouse-position-2b4sd?file=%2Fsrc%2FApp.js%3A78%2C5-86%2C6
 */
export const CustomCursor = () => {
  const [gradientPosition, setGradientPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setGradientPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const updateTouchPosition = (e: TouchEvent) => {
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      setGradientPosition({ x, y });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
    };
  }, []);

  const style: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    transform: 'translate(-50%, -50%)',
    width: SIZE,
    height: SIZE,
    borderRadius: '100%',
    filter: `blur(${SIZE / 10}px)`,
    background: 'linear-gradient(#ed5b72, #f5873b)',
    opacity: 0.4,
    zIndex: -1,
  };

  return (
    <>
      <motion.div
        style={style}
        animate={{
          x: gradientPosition.x - SIZE / 2,
          y: gradientPosition.y - SIZE / 2,
        }}
      />
      <motion.div
        style={style}
        animate={{
          x: gradientPosition.x - SIZE / 2,
          y: gradientPosition.y - SIZE / 2,
        }}
        transition={{ type: 'spring' }}
      />
      <motion.div
        style={style}
        animate={{
          x: gradientPosition.x - SIZE / 2,
          y: gradientPosition.y - SIZE / 2,
        }}
        transition={{ type: 'tween' }}
      />
    </>
  );
};
