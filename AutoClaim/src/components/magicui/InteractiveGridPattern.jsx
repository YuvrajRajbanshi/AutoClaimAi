import React, { useEffect, useRef } from "react";

const InteractiveGridPattern = ({ className }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      grid.style.backgroundPosition = `${clientX / 5}px ${clientY / 5}px`;
    };

    grid.addEventListener("mousemove", handleMouseMove);
    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={gridRef}
      className={`absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-50 ${className}`}
    />
  );
};

export default InteractiveGridPattern;
