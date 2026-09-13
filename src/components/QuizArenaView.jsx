import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Zap, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';

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
        particleCount: 50,
        spread: 60,
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
          particleCount: 150,
          spread: 100,
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
    <div style={{ maxWidth: '780px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        {subjects.map((sub) => (
          <button
            key={sub.id}
            className={`nav-tab ${selectedSubjectId === sub.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedSubjectId(sub.id);
              handleRestartQuiz();
            }}
          >
            <span>{sub.icon}</span>
            {sub.title}
          </button>
        ))}
      </div>

      <div className="quiz-card">
        {!quizFinished ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                Întrebarea {currentQuizIndex + 1} din {activeSubject.quizzes.length}
              </span>
              <span style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#c084fc', padding: '0.3rem 0.8rem', borderRadius: '12px', fontWeight: 700, fontSize: '0.85rem' }}>
                +20 XP per Răspuns Corect
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
              {currentQuiz.question}
            </h3>

            <div style={{ marginBottom: '1.5rem' }}>
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
                    className={`quiz-option ${statusClass}`}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span style={{ flex: 1 }}>{option}</span>
                    {isAnswerSubmitted && idx === currentQuiz.correct && <CheckCircle2 size={20} color="#10b981" />}
                    {isAnswerSubmitted && selectedOption === idx && idx !== currentQuiz.correct && <XCircle size={20} color="#ef4444" />}
                  </div>
                );
              })}
            </div>

            {isAnswerSubmitted && (
              <div style={{ background: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem 1.25rem', borderRadius: '14px', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#cbd5e1', marginBottom: '0.3rem', fontSize: '0.9rem' }}>💡 Explicația Lecției:</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{currentQuiz.explanation}</p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {!isAnswerSubmitted ? (
                <button className="send-btn" onClick={handleSubmitAnswer} disabled={selectedOption === null} style={{ opacity: selectedOption === null ? 0.5 : 1 }}>
                  Verifică Răspunsul
                </button>
              ) : (
                <button className="send-btn" onClick={handleNextQuestion}>
                  Următoarea Întrebare <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem' }}>Ai Finalizat Quiz-ul!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ai obținut <strong>{score}</strong> din <strong>{activeSubject.quizzes.length}</strong> răspunsuri corecte la materia {activeSubject.title}!
            </p>

            <button className="send-btn" style={{ margin: '0 auto' }} onClick={handleRestartQuiz}>
              <RotateCcw size={18} /> Încearcă Din Nou
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
