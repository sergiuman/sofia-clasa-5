import React, { useState } from 'react';
import { Volume2, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.85rem', marginBottom: '1rem', WebkitOverflowScrolling: 'touch' }}>
        {subjects.map((sub) => (
          <button
            key={sub.id}
            className="mobile-preset-pill"
            style={{
              background: selectedSubjectId === sub.id ? 'linear-gradient(135deg, #a855f7, #6366f1)' : 'rgba(255,255,255,0.06)',
              borderColor: selectedSubjectId === sub.id ? '#c084fc' : 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: selectedSubjectId === sub.id ? 700 : 500
            }}
            onClick={() => {
              setSelectedSubjectId(sub.id);
              setCardIndex(0);
              setIsFlipped(false);
            }}
          >
            <span>{sub.icon}</span> {sub.title}
          </button>
        ))}
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
        Apasă pe card pentru a-l întoarce | {cardIndex + 1} / {flashcards.length}
      </p>

      <div className={`flashcard-wrapper ${isFlipped ? 'flipped' : ''}`} style={{ height: '260px', marginTop: '0.5rem', marginBottom: '1rem' }} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="flashcard-inner">
          <div className="flashcard-front" style={{ padding: '1.25rem' }}>
            <span style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{activeSubject.icon}</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#fff', marginBottom: '0.75rem', lineHeight: '1.35' }}>
              {currentCard.front}
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <RotateCw size={12} /> Atinge pentru răspuns
            </span>
          </div>

          <div className="flashcard-back" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.4' }}>
              {currentCard.back}
            </h3>
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: '#fff',
                padding: '0.55rem 1rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
              onClick={(e) => speakAudio(e, currentCard.back)}
            >
              <Volume2 size={16} /> Ascultă Audio
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <button className="mobile-preset-pill" style={{ padding: '0.75rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.3rem' }} onClick={handlePrev}>
          <ChevronLeft size={16} /> Anterior
        </button>
        <button className="mobile-preset-pill" style={{ padding: '0.75rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.3rem' }} onClick={handleNext}>
          Următor <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
