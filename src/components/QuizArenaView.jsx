import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Zap, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';

export default function QuizArenaView({ subjects, onAddXp, initialSubjectId }) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubjectId || subjects[0].id);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
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
      onAddXp(20);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex + 1 < activeSubject.quizzes.length) {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
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
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div>
      {/* Mobile Horizontal Subject Selector */}
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
              handleRestartQuiz();
            }}
          >
            <span>{sub.icon}</span> {sub.title}
          </button>
        ))}
      </div>

      <div className="mobile-quiz-card">
        {!quizFinished ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>
                Întrebarea {currentQuizIndex + 1} / {activeSubject.quizzes.length}
              </span>
              <span style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', padding: '0.2rem 0.6rem', borderRadius: '10px', fontWeight: 700, fontSize: '0.75rem' }}>
                +20 XP
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#fff', marginBottom: '1.15rem', lineHeight: '1.35' }}>
              {currentQuiz.question}
            </h3>

            <div style={{ marginBottom: '1.25rem' }}>
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
                    onClick={() => handleSelectOption(idx)}
                  >
                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', flexShrink: 0 }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span style={{ flex: 1, color: '#fff' }}>{option}</span>
                    {isAnswerSubmitted && idx === currentQuiz.correct && <CheckCircle2 size={18} color="#10b981" />}
                    {isAnswerSubmitted && selectedOption === idx && idx !== currentQuiz.correct && <XCircle size={18} color="#ef4444" />}
                  </div>
                );
              })}
            </div>

            {isAnswerSubmitted && (
              <div style={{ background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.85rem 1rem', borderRadius: '14px', marginBottom: '1.15rem' }}>
                <h4 style={{ color: '#cbd5e1', marginBottom: '0.2rem', fontSize: '0.8rem' }}>💡 Explicație:</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.35' }}>{currentQuiz.explanation}</p>
              </div>
            )}

            {!isAnswerSubmitted ? (
              <button className="mobile-action-btn" onClick={handleSubmitAnswer} disabled={selectedOption === null} style={{ opacity: selectedOption === null ? 0.5 : 1 }}>
                Verifică Răspunsul
              </button>
            ) : (
              <button className="mobile-action-btn" onClick={handleNextQuestion}>
                Următoarea Întrebare <ArrowRight size={18} />
              </button>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>🏆</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#fff', marginBottom: '0.4rem' }}>Bravo Sofia!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Ai obținut <strong>{score}</strong> din <strong>{activeSubject.quizzes.length}</strong> răspunsuri corecte!
            </p>

            <button className="mobile-action-btn" onClick={handleRestartQuiz}>
              <RotateCcw size={18} /> Încearcă Din Nou
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
