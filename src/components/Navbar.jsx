import React from 'react';
import { BookOpen, Bot, Award, Zap, Volume2, Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, totalXp, userLevel }) {
  const tabs = [
    { id: 'subjects', label: 'Materiile Sofiei', icon: BookOpen },
    { id: 'tutor', label: 'Tutorul AI Sofia', icon: Bot },
    { id: 'quizzes', label: 'Quiz & Practică', icon: Zap },
    { id: 'flashcards', label: 'Flashcards Audio', icon: Volume2 },
    { id: 'audiostudio', label: 'NotebookLM & ElevenLabs', icon: Sparkles },
    { id: 'progress', label: 'Progres & Medalii', icon: Award }
  ];

  return (
    <header className="header-wrapper">
      <div className="header">
        <div className="brand-section">
          <div className="avatar-badge">🌟</div>
          <div>
            <h1 className="brand-title">Sofia Learning Hub</h1>
            <p className="brand-subtitle">Platforma Ta Interactivă pentru Clasa a V-a</p>
          </div>
        </div>

        <div className="stats-summary">
          <div className="stat-chip">
            <span>⚡ Level</span>
            <span className="value">{userLevel}</span>
          </div>
          <div className="stat-chip">
            <span>🏆 XP</span>
            <span className="value">{totalXp}</span>
          </div>
        </div>
      </div>

      <nav className="nav-tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
