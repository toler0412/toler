
import React, { useEffect } from 'react';

interface GoogleAdProps {
  slot?: string; 
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

const GoogleAd: React.FC<GoogleAdProps> = ({ slot, format = 'auto', className = "" }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Silencioso se os anúncios automáticos já estiverem cuidando disso
    }
  }, []);

  // Se você tiver um SLOT específico, ele renderiza. Se não, os anúncios automáticos do Head cuidam do resto.
  if (!slot) return null;

  return (
    <div className={`ad-container overflow-hidden flex justify-center py-4 ${className}`}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', minWidth: '250px' }}
        data-ad-client="ca-pub-3635398205421526"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
