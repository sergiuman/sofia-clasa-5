import React from 'react';
import { BookOpen, Bot, Zap, Volume2, Award, Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, totalXp, userLevel }) {
  const tabs = [
    { id: 'subjects', label: 'Materii', icon: BookOpen },
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
          <div className="mobile-stat-badge level">
            <span>⚡ Lvl</span>
            <strong>{userLevel}</strong>
          </div>
          <div className="mobile-stat-badge xp">
            <span>🏆 XP</span>
            <strong>{totalXp}</strong>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Tab Bar */}
      <nav className="mobile-bottom-nav">
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
                <Icon size={20} />
              </div>
              <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
