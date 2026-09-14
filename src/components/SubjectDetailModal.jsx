import React from 'react';
import { X, Book, Zap, FileText, CheckCircle2 } from 'lucide-react';

export default function SubjectDetailModal({ subject, onClose, onLaunchQuiz }) {
  if (!subject) return null;

  return (
    <div className="mobile-modal-overlay" onClick={onClose}>
      <div className="mobile-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-modal-handle"></div>

        <button className="close-modal-btn" onClick={onClose} style={{ top: '1.25rem', right: '1.25rem' }}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '2.5rem' }}>{subject.icon}</span>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#fff' }}>{subject.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              Manual: <strong>{subject.manualName}</strong>
            </p>
          </div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '0.85rem 1rem', borderRadius: '16px', marginBottom: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h4 style={{ color: '#cbd5e1', marginBottom: '0.3rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <FileText size={14} /> Descriere Materie
          </h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.4' }}>{subject.description}</p>
        </div>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fff' }}>
          <Book size={16} color="#a855f7" /> Capitole & Unități de Învățare
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {subject.units.map((unit) => (
            <div
              key={unit.id}
              style={{
                background: 'rgba(30, 41, 59, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1rem',
                borderRadius: '16px'
              }}
            >
              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{unit.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {unit.topics.map((topic, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.3' }}>
                    <CheckCircle2 size={13} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="mobile-action-btn"
          onClick={() => {
            onClose();
            onLaunchQuiz(subject.id);
          }}
        >
          <Zap size={18} /> Începe Quiz la {subject.title}
        </button>
      </div>
    </div>
  );
}
