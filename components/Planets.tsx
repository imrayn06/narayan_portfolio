import React from 'react';

interface PlanetProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Mercury = ({ size = 40, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="40" fill="#8B8989" />
    <circle cx="35" cy="35" r="5" fill="#696969" />
    <circle cx="65" cy="45" r="8" fill="#696969" />
    <circle cx="45" cy="70" r="10" fill="#696969" />
  </svg>
);

export const Venus = ({ size = 40, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="40" fill="#E2C284" />
    <path d="M 10 50 Q 50 20 90 50" stroke="#C59B51" strokeWidth="6" opacity="0.5" fill="none" />
    <path d="M 15 65 Q 50 40 85 65" stroke="#C59B51" strokeWidth="6" opacity="0.4" fill="none" />
  </svg>
);

export const Earth = ({ size = 40, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="40" fill="#2B65EC" />
    <path d="M 25 35 Q 40 20 60 30 T 50 55 T 25 35 Z" fill="#4CBB17" />
    <path d="M 65 45 Q 85 50 75 75 T 55 80 T 50 60 T 65 45 Z" fill="#4CBB17" />
  </svg>
);

export const Mars = ({ size = 40, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="40" fill="#C1440E" />
    <circle cx="35" cy="40" r="7" fill="#8B310A" opacity="0.5"/>
    <circle cx="65" cy="65" r="9" fill="#8B310A" opacity="0.5"/>
    <circle cx="60" cy="35" r="5" fill="#8B310A" opacity="0.5"/>
  </svg>
);

export const Jupiter = ({ size = 40, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <clipPath id="jupiter-clip">
      <circle cx="50" cy="50" r="40" />
    </clipPath>
    <g clipPath="url(#jupiter-clip)">
      <circle cx="50" cy="50" r="40" fill="#D39C7E" />
      <rect x="0" y="25" width="100" height="12" fill="#B37D5B" />
      <rect x="0" y="45" width="100" height="18" fill="#EAD2B8" />
      <rect x="0" y="70" width="100" height="12" fill="#B37D5B" />
      <circle cx="70" cy="55" r="6" fill="#A0522D" />
    </g>
  </svg>
);

export const Saturn = ({ size = 50, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="60" cy="60" r="30" fill="#E2C48D" />
    <ellipse cx="60" cy="60" rx="55" ry="12" stroke="#C49A53" strokeWidth="6" transform="rotate(-20 60 60)" />
    <ellipse cx="60" cy="60" rx="45" ry="8" stroke="#DAB675" strokeWidth="3" transform="rotate(-20 60 60)" opacity="0.8" />
  </svg>
);

export const Uranus = ({ size = 40, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="40" fill="#73D7FF" />
    <ellipse cx="50" cy="50" rx="45" ry="4" stroke="#B0E2FF" strokeWidth="3" transform="rotate(75 50 50)" opacity="0.7"/>
  </svg>
);

export const Neptune = ({ size = 40, ...props }: PlanetProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="40" fill="#274687" />
    <path d="M 15 45 Q 50 65 85 45" stroke="#162955" strokeWidth="5" opacity="0.4" fill="none" />
    <path d="M 20 65 Q 50 85 80 65" stroke="#162955" strokeWidth="5" opacity="0.3" fill="none" />
  </svg>
);
