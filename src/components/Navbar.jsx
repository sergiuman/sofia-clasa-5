import React from 'react';
import { Map, Target, Bot, Zap, Volume2, Award, VolumeX } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  totalXp,
  userLevel,
  streakCount = 1,
  gemsCount = 15,
  isMuted,
  onToggleMute,
  onOpenShop
}) {
  const tabs = [
    { id: 'map', label: 'Hartă', icon: Map },
    { id: 'outcomes', label: 'Ce Înveți', icon: Target },
    { id: 'tutor', label: 'Tutor AI', icon: Bot },
    { id: 'quizzes', label: 'Quiz', icon: Zap },
    { id: 'flashcards', label: 'Flashcards', icon: Volume2 },
    { id: 'progress', label: 'Progres', icon: Award }
  ];

  return (
    <>
      {/* Mobile Top App Bar */}
      <header className="mobile-top-bar">
        <div className="mobile-brand">
          <div className="mobile-avatar">🌟</div>
          <div>
            <h1 className="mobile-app-title">Sofia Hub</h1>
            <p className="mobile-app-subtitle">Clasa a V-a</p>
          </div>
        </div>

        <div className="mobile-stats-row">
          <button
            onClick={onToggleMute}
            className="mobile-stat-badge"
            style={{ background: 'rgba(255,255,255,0.06)', cursor: 'pointer' }}
            title={isMuted ? 'Sunet Oprit' : 'Sunet Pornit'}
          >
            {isMuted ? <VolumeX size={14} color="#ef4444" /> : <Volume2 size={14} color="#34d399" />}
          </button>

          <div className="mobile-stat-badge streak" title="Zile consecutive de învățare">
            <span>🔥</span>
            <strong>{streakCount}d</strong>
          </div>

          <div
            className="mobile-stat-badge gems"
            style={{ cursor: 'pointer' }}
            onClick={onOpenShop}
            title="Deschide Magazinul cu Diamente"
          >
            <span>💎</span>
            <strong style={{ color: '#38bdf8' }}>{gemsCount}</strong>
          </div>

          <div className="mobile-stat-badge xp">
            <span>🏆</span>
            <strong style={{ color: '#fbbf24' }}>{totalXp}</strong>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Tab Bar */}
      <nav className="mobile-bottom-nav" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`mobile-tab-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="tab-icon-wrapper">
                <Icon size={18} />
              </div>
              <span className="tab-label" style={{ fontSize: '0.65rem' }}>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
