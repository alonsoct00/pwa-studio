import React from 'react';
import './CampaignBanner.css';

const CampaignBanner = ({ text, bgColor, textColor }) => {
  return (
    <div
      className="campaign-banner"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {text}
    </div>
  );
};

export default CampaignBanner;