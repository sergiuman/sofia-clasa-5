import React from 'react';
import { Award, Zap, CheckCircle, Lock, BookOpen } from 'lucide-react';
import { BADGES } from '../data/subjectsData';

export default function ProgressView({ subjects, totalXp, userLevel }) {
  const xpForNextLevel = userLevel * 300;
  const levelProgressPercent = Math.min(100, Math.round(((totalXp % 300) / 300) * 100));

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ background: 'var(--bg-card)', border: 'var(--glass-border)', borderRadius: '24px', padding: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)' }}>
            👑
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '0.2rem' }}>Level {userLevel} - Exploratoare Clasa V</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Tot înainte Sofia! Ai acumulat <strong>{totalXp} XP</strong> din exerciții.</p>
          </div>
        </div>

        <div style={{ minWidth: '240px', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600 }}>
            <span>Progres Level {userLevel + 1}</span>
            <span>{totalXp % 300} / 300 XP</span>
          </div>
          <div className="progress-bar-container" style={{ height: '12px' }}>
            <div className="progress-bar-fill" style={{ width: `${levelProgressPercent}%`, background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}></div>
          </div>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Award color="#fbbf24" size={24} /> Medalii și Insignii de Merit
      </h3>

      <div className="badges-grid" style={{ marginBottom: '2.5rem' }}>
        {BADGES.map((badge) => (
          <div key={badge.id} className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="badge-icon">{badge.icon}</div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem', color: badge.unlocked ? '#fff' : '#64748b' }}>{badge.title}</h4>
            <p style={{ fontSize: '0.8rem', color: badge.unlocked ? '#cbd5e1' : '#475569' }}>{badge.description}</p>
            <div style={{ marginTop: '0.75rem' }}>
              {badge.unlocked ? (
                <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                  <CheckCircle size={14} /> Deblocat
                </span>
              ) : (
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                  <Lock size={14} /> Blocat
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BookOpen color="#3b82f6" size={24} /> Progresul pe Materiile din Manuale
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {subjects.map((sub) => (
          <div key={sub.id} style={{ background: 'var(--bg-card)', border: 'var(--glass-border)', padding: '1.25rem', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontSize: '2rem' }}>{sub.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{sub.title}</h4>
                <span style={{ fontSize: '0.85rem', color: sub.themeColor, fontWeight: 700 }}>{sub.progress}% Completat</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${sub.progress}%`, background: sub.themeColor }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
