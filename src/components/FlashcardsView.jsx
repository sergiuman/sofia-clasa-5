import React, { useState } from 'react';
import { Volume2, RotateCw, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function FlashcardsView({ subjects }) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0].id);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeSubject = subjects.find((s) => s.id === selectedSubjectId) || subjects[0];
  const flashcards = activeSubject.flashcards;
  const currentCard = flashcards[cardIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const speakAudio = (e, text) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ro-RO';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 145px - var(--safe-top) - var(--safe-bottom))', justifyContent: 'space-between' }}>
      {/* Top Header Row: Subject Select Dropdown + Card Index Counter */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ position: 'relative' }}>
          <select
            value={selectedSubjectId}
            onChange={(e) => {
              setSelectedSubjectId(e.target.value);
              setCardIndex(0);
              setIsFlipped(false);
            }}
            style={{
              background: 'rgba(168, 85, 247, 0.2)',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              color: '#fff',
              padding: '0.3rem 1.6rem 0.3rem 0.6rem',
              borderRadius: '10px',
              fontSize: '0.8rem',
              fontWeight: 700,
              outline: 'none',
              appearance: 'none',
              cursor: 'pointer'
            }}
          >
            {subjects.map((sub) => (
              <option key={sub.id} value={sub.id} style={{ background: '#161e2e', color: '#fff' }}>
                {sub.icon} {sub.title}
              </option>
            ))}
          </select>
          <ChevronDown size={14} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#c084fc' }} />
        </div>

        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700 }}>
          Card {cardIndex + 1} / {flashcards.length}
        </span>
      </div>

      {/* Main Flip Card Container */}
      <div
        className={`flashcard-wrapper ${isFlipped ? 'flipped' : ''}`}
        style={{ flex: 1, height: 'auto', margin: '0.5rem 0' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front" style={{ padding: '1.25rem', justifyContent: 'center' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '0.6rem' }}>{activeSubject.icon}</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', marginBottom: '0.85rem', lineHeight: '1.35' }}>
              {currentCard.front}
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <RotateCw size={13} /> Atinge pentru răspuns
            </span>
          </div>

          <div className="flashcard-back" style={{ padding: '1.25rem', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#fff', marginBottom: '1rem', lineHeight: '1.4' }}>
              {currentCard.back}
            </h3>
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                border: 'none',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 700,
                fontSize: '0.8rem'
              }}
              onClick={(e) => speakAudio(e, currentCard.back)}
            >
              <Volume2 size={16} /> Ascultă Audio
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        <button
          className="mobile-preset-pill"
          style={{ padding: '0.7rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', background: 'rgba(30, 41, 59, 0.8)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          onClick={handlePrev}
        >
          <ChevronLeft size={16} /> Anterior
        </button>
        <button
          className="mobile-preset-pill"
          style={{ padding: '0.7rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #a855f7, #ec4899)', borderColor: 'transparent', color: '#fff', fontWeight: 700 }}
          onClick={handleNext}
        >
          Următor <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
