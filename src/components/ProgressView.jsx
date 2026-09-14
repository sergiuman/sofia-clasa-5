import React from 'react';
import { Award, BookOpen, Lock, CheckCircle } from 'lucide-react';
import { BADGES } from '../data/subjectsData';

export default function ProgressView({ subjects, totalXp, userLevel }) {
  const levelProgressPercent = Math.min(100, Math.round(((totalXp % 300) / 300) * 100));

  return (
    <div style={{ paddingBottom: '1rem' }}>
      <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '20px', padding: '1.25rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #a855f7, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
            👑
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', marginBottom: '0.1rem' }}>Lvl {userLevel} - Sofia</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}><strong>{totalXp} XP</strong> acumulate</p>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.3rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            <span>Progres Nivelul {userLevel + 1}</span>
            <span>{totalXp % 300} / 300 XP</span>
          </div>
          <div className="mobile-progress-bar-bg" style={{ height: '8px' }}>
            <div className="mobile-progress-fill" style={{ width: `${levelProgressPercent}%`, background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}></div>
          </div>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fff' }}>
        <Award color="#fbbf24" size={18} /> Medalii și Insignii de Merit
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {BADGES.map((badge) => (
          <div
            key={badge.id}
            style={{
              background: badge.unlocked ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))' : 'rgba(30, 41, 59, 0.5)',
              border: badge.unlocked ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '0.85rem 0.75rem',
              textAlign: 'center',
              opacity: badge.unlocked ? 1 : 0.65
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>{badge.icon}</div>
            <h4 style={{ fontSize: '0.85rem', marginBottom: '0.2rem', color: badge.unlocked ? '#fff' : '#94a3b8' }}>{badge.title}</h4>
            <p style={{ fontSize: '0.7rem', color: badge.unlocked ? '#cbd5e1' : '#64748b', lineHeight: '1.2' }}>{badge.description}</p>
          </div>
        ))}
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fff' }}>
        <BookOpen color="#3b82f6" size={18} /> Progres pe Materii
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {subjects.map((sub) => (
          <div key={sub.id} style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.85rem 1rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{sub.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{sub.title}</h4>
                <span style={{ fontSize: '0.75rem', color: sub.themeColor, fontWeight: 700 }}>{sub.progress}%</span>
              </div>
              <div className="mobile-progress-bar-bg">
                <div className="mobile-progress-fill" style={{ width: `${sub.progress}%`, background: sub.themeColor }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
