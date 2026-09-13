import React from 'react';
import { X, Book, Zap, FileText, CheckCircle2 } from 'lucide-react';

export default function SubjectDetailModal({ subject, onClose, onLaunchQuiz }) {
  if (!subject) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '3rem' }}>{subject.icon}</span>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem' }}>{subject.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Manual școlar: <strong>{subject.manualName}</strong>
            </p>
          </div>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '16px', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h4 style={{ color: '#cbd5e1', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={16} /> Descriere Materie
          </h4>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{subject.description}</p>
        </div>

        <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Book size={18} color="#8b5cf6" /> Capitole & Unități de Învățare
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {subject.units.map((unit) => (
            <div
              key={unit.id}
              style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1.25rem',
                borderRadius: '16px'
              }}
            >
              <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{unit.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {unit.topics.map((topic, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={14} color="#10b981" /> {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          className="send-btn"
          style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
          onClick={() => {
            onClose();
            onLaunchQuiz(subject.id);
          }}
        >
          <Zap size={20} /> Începe Quiz-ul de Practică la {subject.title}
        </button>
      </div>
    </div>
  );
}
