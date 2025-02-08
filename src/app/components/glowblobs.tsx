import React from 'react';

interface GlowBlobProps {
  left: string;
  top: string;
  width: number;
  height: number;
  color: string;
  blur?: number;
  opacity?: number;
}

const GlowBlob: React.FC<GlowBlobProps> = ({ 
  left, 
  top, 
  width, 
  height, 
  color, 
  blur = 400,
  opacity = 1 
}) => (
  <div 
    className="absolute rounded-full"
    style={{
      left,
      top,
      width: `${width}px`,
      height: `${height}px`,
      background: color,
      filter: `blur(${blur}px)`,
      opacity,
      transform: 'translate(-50%, -50%)',
      mixBlendMode: 'normal',
    }}
  />
);

interface GlowBlobsProps {
  className?: string;
}

const GlowBlobs: React.FC<GlowBlobsProps> = ({ className = '' }) => {
  const blobs: GlowBlobProps[] = [
    {
      left: '25%',
      top: '40%',
      width: 800,
      height: 800,
      color: 'rgb(88, 28, 135)', // Deep purple
      blur: 200,
      opacity: 0.8
    },
    {
      left: '50%',
      top: '45%',
      width: 900,
      height: 900,
      color: 'rgb(157, 23, 77)', // Dark pink/red
      blur: 250,
      opacity: 0.7
    },
    {
      left: '75%',
      top: '50%',
      width: 700,
      height: 700,
      color: 'rgb(194, 65, 12)', // Dark orange/brown
      blur: 200,
      opacity: 0.8
    }
  ];

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-black ${className}`}>
      {blobs.map((blob, index) => (
        <GlowBlob key={index} {...blob} />
      ))}
    </div>
  );
};

export default GlowBlobs;