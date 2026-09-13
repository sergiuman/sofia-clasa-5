import React from 'react';
import { BookMarked, ChevronRight } from 'lucide-react';

export default function SubjectCard({ subject, onClick }) {
  return (
    <div className="subject-card" onClick={onClick}>
      <div className="card-header">
        <div className="card-icon">{subject.icon}</div>
        <span className="card-badge">{subject.units.length} Unitați</span>
      </div>

      <h3 className="card-title">{subject.title}</h3>
      <p className="card-desc">{subject.description}</p>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            width: `${subject.progress}%`,
            background: subject.themeColor || '#8b5cf6'
          }}
        ></div>
      </div>

      <div className="card-footer">
        <span>{subject.progress}% Parcurs</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#fff' }}>
          Vezi Detalii <ChevronRight size={14} />
        </span>
      </div>
    </div>
  );
}
