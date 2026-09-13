import React, { useState } from 'react';
import { Volume2, RotateCw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

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
    <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
        {subjects.map((sub) => (
          <button
            key={sub.id}
            className={`nav-tab ${selectedSubjectId === sub.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedSubjectId(sub.id);
              setCardIndex(0);
              setIsFlipped(false);
            }}
          >
            <span>{sub.icon}</span>
            {sub.title}
          </button>
        ))}
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
        Apasă pe card pentru a întoarce definiția | Cardul {cardIndex + 1} din {flashcards.length}
      </p>

      <div className={`flashcard-wrapper ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{activeSubject.icon}</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
              {currentCard.front}
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <RotateCw size={14} /> Apasă pentru răspuns
            </span>
          </div>

          <div className="flashcard-back">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              {currentCard.back}
            </h3>
            <button
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '14px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
              onClick={(e) => speakAudio(e, currentCard.back)}
            >
              <Volume2 size={18} /> Ascultă Audio (Română)
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
        <button className="nav-tab" onClick={handlePrev}>
          <ChevronLeft size={18} /> Card Anterior
        </button>
        <button className="nav-tab" onClick={handleNext}>
          Card Următor <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
