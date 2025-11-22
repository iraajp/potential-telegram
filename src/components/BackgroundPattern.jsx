import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Neural Network Paths
function NeuralPaths() {
  const nodes = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`
  }));

  const connections = [];
  nodes.forEach((node, i) => {
    const nearbyNodes = nodes.filter((other, j) => {
      if (i === j) return false;
      const distance = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2));
      return distance < 150 && Math.random() > 0.7;
    });
    
    nearbyNodes.forEach(target => {
      connections.push({
        id: `conn-${i}-${target.id}`,
        d: `M${node.x},${node.y} L${target.x},${target.y}`,
        delay: Math.random() * 10
      });
    });
  });

  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 8,
            delay: conn.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="1.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  );
}

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none text-text">
      <NeuralPaths />
    </div>
  );
}
