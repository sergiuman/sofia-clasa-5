import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function SubjectCard({ subject, onClick }) {
  return (
    <div className="mobile-subject-card" onClick={onClick}>
      <div className="mobile-card-top">
        <div className="mobile-card-icon">{subject.icon}</div>
        <span className="mobile-unit-chip">{subject.units.length} Unit.</span>
      </div>

      <div>
        <h3 className="mobile-card-title">{subject.title}</h3>
        
        <div className="mobile-progress-bar-bg">
          <div
            className="mobile-progress-fill"
            style={{
              width: `${subject.progress}%`,
              background: subject.themeColor || '#a855f7'
            }}
          ></div>
        </div>

        <div className="mobile-card-footer">
          <span>{subject.progress}%</span>
          <span style={{ display: 'flex', alignItems: 'center', color: '#c084fc' }}>
            Detalii <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
