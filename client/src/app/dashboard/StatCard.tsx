import React from 'react';
import { Package, TrendingUp } from 'lucide-react';

interface Detail {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: React.ComponentType;
}

interface Props {
  title: string;
  primaryIcon: React.ReactNode;
  dateRange: string;
  details: Detail[];
}

const StatCard: React.FC<Props> = ({ title, primaryIcon, dateRange, details }) => {
  return (
    <div className="stat-card">
      <div className="header">
        {primaryIcon}
        <h2>{title}</h2>
      </div>
      <div className="date-range">{dateRange}</div>
      <div className="details">
        {details.map((detail, index) => (
          <div key={index} className="detail">
            <detail.IconComponent />
            <div className="info">
              <span className="title">{detail.title}</span>
              <span className="amount">{detail.amount}</span>
              <span className="change">{detail.changePercentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard;