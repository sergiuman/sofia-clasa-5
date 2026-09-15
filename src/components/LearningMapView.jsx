import React, { useState } from 'react';
import { Sparkles, Lock, CheckCircle2, Gift, Zap, BookOpen, Crown, X, Star } from 'lucide-react';
import { playChestSound, playCorrectSound } from '../utils/soundEngine';

export default function LearningMapView({ subjects, onLaunchQuiz, onOpenLesson, onOpenChest }) {
  const [selectedSubjectId, setSelectedSubjectId] = useState('geografie');
  const [activeModalNode, setActiveModalNode] = useState(null);
  const [openedChests, setOpenedChests] = useState(() => {
    const saved = localStorage.getItem('sofia_opened_chests');
    return saved ? JSON.parse(saved) : [];
  });

  const activeSubject = subjects.find((s) => s.id === selectedSubjectId) || subjects[0];

  // Construct Roadmap Nodes for the selected subject
  const roadmapNodes = [
    {
      id: `${activeSubject.id}-n1`,
      type: 'lesson',
      title: 'Lecția 1: Introducere & Noțiuni Cheie',
      desc: 'Scurtă privire de ansamblu asupra capitolului.',
      icon: '📖',
      status: 'active', // First node is unlocked by default
      position: 'center'
    },
    {
      id: `${activeSubject.id}-n2`,
      type: 'quiz',
      title: 'Quiz Checkpoint 1',
      desc: 'Verifică-ți cunoștințele din prima parte.',
      icon: '⚡',
      status: activeSubject.progress > 0 ? 'completed' : 'active',
      stars: activeSubject.progress >= 50 ? 3 : 2,
      position: 'right'
    },
    {
      id: `${activeSubject.id}-n3`,
      type: 'chest',
      title: 'Cufărul cu Comori 🎁',
      desc: 'Deschide cufărul pentru bonus de XP și Diamente!',
      icon: '🎁',
      status: activeSubject.progress >= 30 ? 'active' : 'locked',
      position: 'left'
    },
    {
      id: `${activeSubject.id}-n4`,
      type: 'lesson',
      title: 'Lecția 2: Concepte Avansate',
      desc: 'Aprofundarea materiei și aplicații practice.',
      icon: '📖',
      status: activeSubject.progress >= 40 ? 'active' : 'locked',
      position: 'center'
    },
    {
      id: `${activeSubject.id}-n5`,
      type: 'quiz',
      title: 'Quiz Checkpoint 2',
      desc: 'Test grilă avansat.',
      icon: '⚡',
      status: activeSubject.progress >= 60 ? 'completed' : activeSubject.progress >= 40 ? 'active' : 'locked',
      stars: 3,
      position: 'right'
    },
    {
      id: `${activeSubject.id}-n6`,
      type: 'boss',
      title: '👑 Boss Challenge: Testul Final de Capitol',
      desc: 'Demonstrează că ești un adevărat maestru la ' + activeSubject.title + '!',
      icon: '👑',
      status: activeSubject.progress >= 80 ? 'active' : 'locked',
      position: 'center'
    }
  ];

  const handleNodeClick = (node) => {
    if (node.status === 'locked') return;

    if (node.type === 'quiz' || node.type === 'boss') {
      playCorrectSound();
      onLaunchQuiz(activeSubject.id);
    } else if (node.type === 'chest') {
      if (!openedChests.includes(node.id)) {
        playChestSound();
        setOpenedChests((prev) => {
          const updated = [...prev, node.id];
          localStorage.setItem('sofia_opened_chests', JSON.stringify(updated));
          return updated;
        });
        onOpenChest(50, 15); // +50 XP, +15 Gems
      }
      setActiveModalNode(node);
    } else if (node.type === 'lesson') {
      playCorrectSound();
      setActiveModalNode(node);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 145px - var(--safe-top) - var(--safe-bottom))' }}>
      {/* Subject Horizontal Selector */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '0.85rem', WebkitOverflowScrolling: 'touch' }}>
        {subjects.map((sub) => (
          <button
            key={sub.id}
            className="mobile-preset-pill"
            style={{
              background: selectedSubjectId === sub.id ? 'linear-gradient(135deg, #a855f7, #6366f1)' : 'rgba(255,255,255,0.06)',
              borderColor: selectedSubjectId === sub.id ? '#c084fc' : 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: selectedSubjectId === sub.id ? 700 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            onClick={() => setSelectedSubjectId(sub.id)}
          >
            <span>{sub.icon}</span> {sub.title}
          </button>
        ))}
      </div>

      {/* Winding Learning Map Path */}
      <div className="learning-map-container" style={{ flex: 1, padding: '1rem 0', position: 'relative' }}>
        <div className="map-title-card" style={{ background: 'rgba(22, 30, 46, 0.85)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '0.85rem 1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#fff' }}>
              {activeSubject.icon} Harta: {activeSubject.title}
            </h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Apasă pe nodurile deblocate pentru a juca!</p>
          </div>
          <span style={{ background: 'rgba(168,85,247,0.2)', color: '#c084fc', padding: '0.25rem 0.6rem', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 700 }}>
            {activeSubject.progress}% Progres
          </span>
        </div>

        {/* Nodes Winding Road */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', alignItems: 'center' }}>
          {roadmapNodes.map((node, index) => {
            const isOpenedChest = node.type === 'chest' && openedChests.includes(node.id);
            let alignStyle = { margin: '0 auto' };
            if (node.position === 'left') alignStyle = { marginRight: 'auto', marginLeft: '1.5rem' };
            if (node.position === 'right') alignStyle = { marginLeft: 'auto', marginRight: '1.5rem' };

            return (
              <div
                key={node.id}
                style={{
                  ...alignStyle,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: node.status === 'locked' ? 'not-allowed' : 'pointer',
                  zIndex: 2,
                  position: 'relative'
                }}
                onClick={() => handleNodeClick(node)}
              >
                {/* Node Button Circle */}
                <div
                  className={`map-node-circle ${node.status}`}
                  style={{
                    width: node.type === 'boss' ? '68px' : '60px',
                    height: node.type === 'boss' ? '68px' : '60px',
                    borderRadius: '50%',
                    background: node.status === 'completed'
                      ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                      : node.status === 'active'
                      ? 'linear-gradient(135deg, #a855f7, #ec4899)'
                      : 'rgba(30, 41, 59, 0.7)',
                    border: node.status === 'active'
                      ? '3px solid #fff'
                      : node.status === 'completed'
                      ? '3px solid #fbbf24'
                      : '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: node.status === 'active'
                      ? '0 0 20px rgba(168, 85, 247, 0.6)'
                      : node.status === 'completed'
                      ? '0 0 15px rgba(245, 158, 11, 0.4)'
                      : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: node.type === 'boss' ? '2rem' : '1.6rem',
                    transition: 'transform 0.2s ease',
                    position: 'relative'
                  }}
                >
                  {node.status === 'locked' ? (
                    <Lock size={22} color="#64748b" />
                  ) : isOpenedChest ? (
                    '✨'
                  ) : (
                    node.icon
                  )}

                  {/* Active pulsing aura ring */}
                  {node.status === 'active' && (
                    <div
                      style={{
                        position: 'absolute',
                        top: -6,
                        left: -6,
                        right: -6,
                        bottom: -6,
                        borderRadius: '50%',
                        border: '2px solid #ec4899',
                        animation: 'pulse-ring 1.8s infinite'
                      }}
                    />
                  )}
                </div>

                {/* Node Title Label */}
                <div style={{ marginTop: '0.4rem', textAlign: 'center', maxWidth: '140px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: node.status === 'locked' ? '#64748b' : '#fff', display: 'block', lineHeight: 1.2 }}>
                    {node.title}
                  </span>
                  {node.status === 'completed' && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '2px' }}>
                      <Star size={12} fill="#fbbf24" color="#fbbf24" />
                      <Star size={12} fill="#fbbf24" color="#fbbf24" />
                      <Star size={12} fill="#fbbf24" color="#fbbf24" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Node Story / Reward Modal */}
      {activeModalNode && (
        <div className="mobile-modal-overlay" onClick={() => setActiveModalNode(null)}>
          <div className="mobile-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-modal-handle" />
            <button className="close-modal-btn" onClick={() => setActiveModalNode(null)} style={{ top: '1.25rem', right: '1.25rem' }}>
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{activeModalNode.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#fff', marginBottom: '0.4rem' }}>
                {activeModalNode.title}
              </h3>

              {activeModalNode.type === 'chest' ? (
                <div>
                  <p style={{ color: '#34d399', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    🎉 Ai deblocat Cufărul cu Comori!
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    Recompensă primită: <strong>+50 XP</strong> și <strong>+15 Diamente 💎</strong>!
                  </p>
                  <button className="mobile-action-btn" onClick={() => setActiveModalNode(null)}>
                    Colectează Recompensa! 🎁
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '16px', marginBottom: '1.25rem', textAlign: 'left' }}>
                    <h4 style={{ color: '#c084fc', marginBottom: '0.4rem', fontSize: '0.9rem' }}>📖 Sinteza Lecției:</h4>
                    <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.4 }}>
                      În acest capitol din <strong>{activeSubject.title}</strong>, vei descoperi noțiunile cheie din programa de clasa a V-a. Parcurge lecția, rezolvă testele și deblochează insigniile de merit!
                    </p>
                  </div>
                  <button
                    className="mobile-action-btn"
                    onClick={() => {
                      setActiveModalNode(null);
                      onLaunchQuiz(activeSubject.id);
                    }}
                  >
                    Treci la Quiz-ul de Verificare! ⚡
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
