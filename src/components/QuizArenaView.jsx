import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Zap, CheckCircle2, XCircle, RotateCcw, ArrowRight, ChevronDown, Lightbulb, Flame } from 'lucide-react';
import { playComboSound } from '../utils/soundEngine';

export default function QuizArenaView({ subjects, onCorrectAnswer, initialSubjectId }) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubjectId || subjects[0].id);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [comboStreak, setComboStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeSubject = subjects.find((s) => s.id === selectedSubjectId) || subjects[0];
  const currentQuiz = activeSubject.quizzes[currentQuizIndex];

  const handleSelectOption = (index) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    if (selectedOption === currentQuiz.correct) {
      setScore((prev) => prev + 1);
      const newCombo = comboStreak + 1;
      setComboStreak(newCombo);
      onCorrectAnswer(currentQuiz.id);

      if (newCombo >= 2) {
        playComboSound();
      }

      confetti({
        particleCount: newCombo >= 2 ? 60 : 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    } else {
      setComboStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex + 1 < activeSubject.quizzes.length) {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setShowHint(false);
    } else {
      setQuizFinished(true);
      if (score + 1 === activeSubject.quizzes.length) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
    setComboStreak(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 145px - var(--safe-top) - var(--safe-bottom))', justifyContent: 'center' }}>
      <div className="mobile-quiz-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        {!quizFinished ? (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            {/* Top Bar: Subject Selector Dropdown + Combo & Question Counter */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <div style={{ position: 'relative' }}>
                  <select
                    value={selectedSubjectId}
                    onChange={(e) => {
                      setSelectedSubjectId(e.target.value);
                      handleRestartQuiz();
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
                        {sub.icon} {sub.title} ({sub.quizzes.length} intrebări)
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#c084fc' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {comboStreak >= 2 && (
                    <span style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', padding: '0.2rem 0.5rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                      <Flame size={12} fill="#f87171" /> Combo x{comboStreak}!
                    </span>
                  )}
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700 }}>
                    {currentQuizIndex + 1} / {activeSubject.quizzes.length}
                  </span>
                </div>
              </div>

              {/* Question Text & Hint Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: '#fff', lineHeight: '1.3', flex: 1 }}>
                  {currentQuiz.question}
                </h3>
                <button
                  onClick={() => setShowHint(!showHint)}
                  style={{
                    background: showHint ? 'rgba(251, 191, 36, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(251, 191, 36, 0.4)',
                    color: '#fbbf24',
                    padding: '0.3rem 0.5rem',
                    borderRadius: '10px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    flexShrink: 0
                  }}
                >
                  <Lightbulb size={13} /> Indiciu
                </button>
              </div>

              {/* Hint Box */}
              {showHint && (
                <div style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '0.5rem 0.75rem', borderRadius: '12px', marginBottom: '0.75rem' }}>
                  <p style={{ color: '#fef08a', fontSize: '0.75rem', lineHeight: '1.25' }}>
                    💡 <strong>Indiciu:</strong> Gândește-te la ce ai învățat la această temă în manual! {currentQuiz.explanation.slice(0, 45)}...
                  </p>
                </div>
              )}

              {/* Options List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {currentQuiz.options.map((option, idx) => {
                  let statusClass = '';
                  if (selectedOption === idx) statusClass = 'selected';
                  if (isAnswerSubmitted) {
                    if (idx === currentQuiz.correct) statusClass = 'correct';
                    else if (selectedOption === idx) statusClass = 'incorrect';
                  }

                  return (
                    <div
                      key={idx}
                      className={`mobile-quiz-option ${statusClass}`}
                      style={{ padding: '0.6rem 0.75rem', marginBottom: 0, fontSize: '0.85rem' }}
                      onClick={() => handleSelectOption(idx)}
                    >
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', flexShrink: 0 }}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span style={{ flex: 1, color: '#fff', lineHeight: '1.2' }}>{option}</span>
                      {isAnswerSubmitted && idx === currentQuiz.correct && <CheckCircle2 size={16} color="#10b981" />}
                      {isAnswerSubmitted && selectedOption === idx && idx !== currentQuiz.correct && <XCircle size={16} color="#ef4444" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Explanation & Action Button */}
            <div style={{ marginTop: '0.5rem' }}>
              {isAnswerSubmitted && (
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.5rem 0.75rem', borderRadius: '12px', marginBottom: '0.5rem' }}>
                  <p style={{ color: '#cbd5e1', fontSize: '0.75rem', lineHeight: '1.25' }}>
                    💡 <strong>Explicație:</strong> {currentQuiz.explanation}
                  </p>
                </div>
              )}

              {!isAnswerSubmitted ? (
                <button className="mobile-action-btn" style={{ padding: '0.75rem', fontSize: '0.95rem' }} onClick={handleSubmitAnswer} disabled={selectedOption === null} style={{ opacity: selectedOption === null ? 0.5 : 1 }}>
                  Verifică Răspunsul
                </button>
              ) : (
                <button className="mobile-action-btn" style={{ padding: '0.75rem', fontSize: '0.95rem' }} onClick={handleNextQuestion}>
                  Următoarea Întrebare <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏆</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: '#fff', marginBottom: '0.3rem' }}>Bravo Sofia!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              Ai obținut <strong>{score}</strong> din <strong>{activeSubject.quizzes.length}</strong> răspunsuri corecte la materia {activeSubject.title}!
            </p>

            <button className="mobile-action-btn" onClick={handleRestartQuiz}>
              <RotateCcw size={16} /> Încearcă Din Nou
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
