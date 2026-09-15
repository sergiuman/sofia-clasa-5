import React, { useState } from 'react';
import { LEARNING_OUTCOMES } from '../data/learningOutcomes';
import { Sparkles, CheckCircle2, Zap, Compass, Star } from 'lucide-react';

export default function LearningOutcomesView() {
  const [selectedSubjectId, setSelectedSubjectId] = useState(LEARNING_OUTCOMES[0].subjectId);

  const activeOutcome = LEARNING_OUTCOMES.find((o) => o.subjectId === selectedSubjectId) || LEARNING_OUTCOMES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Subject Horizontal Selector */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', WebkitOverflowScrolling: 'touch' }}>
        {LEARNING_OUTCOMES.map((item) => (
          <button
            key={item.subjectId}
            className="mobile-preset-pill"
            style={{
              background: selectedSubjectId === item.subjectId ? 'linear-gradient(135deg, #a855f7, #6366f1)' : 'rgba(255,255,255,0.06)',
              borderColor: selectedSubjectId === item.subjectId ? '#c084fc' : 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: selectedSubjectId === item.subjectId ? 700 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            onClick={() => setSelectedSubjectId(item.subjectId)}
          >
            <span>{item.icon}</span> {item.title}
          </button>
        ))}
      </div>

      {/* Main Learning Outcome Card */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '1.25rem',
          backdropFilter: 'blur(16px)'
        }}
      >
        {/* Header Badge & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${activeOutcome.color}, #4c1d95)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0
            }}
          >
            {activeOutcome.icon}
          </div>
          <div>
            <span
              style={{
                background: 'rgba(251, 191, 36, 0.15)',
                color: '#fbbf24',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.2rem 0.6rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                marginBottom: '0.2rem'
              }}
            >
              <Star size={12} fill="#fbbf24" /> {activeOutcome.superpower}
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: '#fff' }}>
              Ce Va Învăța Sofia la {activeOutcome.title}
            </h2>
          </div>
        </div>

        {/* Overview Description */}
        <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.45', marginBottom: '1.25rem' }}>
          {activeOutcome.description}
        </p>

        {/* Skills & Competencies List */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              color: '#fff',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={16} color="#c084fc" /> Competențe & Abilități Dobândite:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {activeOutcome.skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.75rem 0.85rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem'
                }}
              >
                <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: '1.35' }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Application Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15))',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            padding: '0.85rem 1rem',
            borderRadius: '16px'
          }}
        >
          <h4 style={{ color: '#c084fc', fontSize: '0.82rem', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            💡 Exemplu din Viața Reală:
          </h4>
          <p style={{ color: '#f1f5f9', fontSize: '0.82rem', lineHeight: '1.4' }}>
            {activeOutcome.realWorldExample}
          </p>
        </div>
      </div>
    </div>
  );
}
