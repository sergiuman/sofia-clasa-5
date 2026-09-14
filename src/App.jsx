import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SubjectCard from './components/SubjectCard';
import SubjectDetailModal from './components/SubjectDetailModal';
import AITutorView from './components/AITutorView';
import QuizArenaView from './components/QuizArenaView';
import FlashcardsView from './components/FlashcardsView';
import ProgressView from './components/ProgressView';
import { SUBJECTS, BADGES } from './data/subjectsData';
import './styles/main.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('subjects');
  
  // Track answered quiz IDs per subject
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState(() => {
    const saved = localStorage.getItem('sofia_answered_questions');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [quizSubjectId, setQuizSubjectId] = useState('geografie');

  useEffect(() => {
    localStorage.setItem('sofia_answered_questions', JSON.stringify(answeredQuestionIds));
  }, [answeredQuestionIds]);

  // Calculate dynamic progress for each subject
  const subjectsData = SUBJECTS.map((sub) => {
    const totalQuestions = sub.quizzes.length;
    if (totalQuestions === 0) return { ...sub, progress: 0 };

    const correctForSub = sub.quizzes.filter((q) => answeredQuestionIds.includes(q.id)).length;
    const progressPercent = Math.min(100, Math.round((correctForSub / totalQuestions) * 100));

    return { ...sub, progress: progressPercent };
  });

  // Calculate total XP and Level
  const totalXp = answeredQuestionIds.length * 20;
  const userLevel = Math.floor(totalXp / 300) + 1;

  // Calculate badges unlocked based on real progress
  const badgesData = BADGES.map((b) => {
    let unlocked = false;
    if (b.id === 'b1' && answeredQuestionIds.length >= 1) unlocked = true;
    if (b.id === 'b2' && (subjectsData.find((s) => s.id === 'geografie')?.progress || 0) >= 80) unlocked = true;
    if (b.id === 'b3' && (subjectsData.find((s) => s.id === 'biologie')?.progress || 0) >= 80) unlocked = true;
    if (b.id === 'b4' && (subjectsData.find((s) => s.id === 'matematica')?.progress || 0) >= 80) unlocked = true;
    if (b.id === 'b5' && (subjectsData.find((s) => s.id === 'romana')?.progress || 0) >= 80) unlocked = true;
    if (b.id === 'b6' && (subjectsData.find((s) => s.id === 'istorie')?.progress || 0) >= 80) unlocked = true;
    if (b.id === 'b7' && (subjectsData.find((s) => s.id === 'informatica')?.progress || 0) >= 80) unlocked = true;
    if (b.id === 'b8' && totalXp >= 300) unlocked = true;
    return { ...b, unlocked };
  });

  const handleCorrectAnswer = (questionId) => {
    if (!answeredQuestionIds.includes(questionId)) {
      setAnsweredQuestionIds((prev) => [...prev, questionId]);
    }
  };

  const handleLaunchQuiz = (subjectId) => {
    setQuizSubjectId(subjectId);
    setActiveTab('quizzes');
  };

  return (
    <div className="app-container">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalXp={totalXp}
        userLevel={userLevel}
      />

      <main>
        {activeTab === 'subjects' && (
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#fff', marginBottom: '0.15rem' }}>
                Manualele Tale 📚
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                Alege o materie pentru lectii, quiz-uri și fișe.
              </p>
            </div>

            <div className="mobile-subjects-grid">
              {subjectsData.map((sub) => (
                <SubjectCard
                  key={sub.id}
                  subject={sub}
                  onClick={() => setSelectedSubject(sub)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tutor' && <AITutorView subjects={subjectsData} />}

        {activeTab === 'quizzes' && (
          <QuizArenaView
            subjects={subjectsData}
            onCorrectAnswer={handleCorrectAnswer}
            initialSubjectId={quizSubjectId}
          />
        )}

        {activeTab === 'flashcards' && <FlashcardsView subjects={subjectsData} />}

        {activeTab === 'progress' && (
          <ProgressView
            subjects={subjectsData}
            badges={badgesData}
            totalXp={totalXp}
            userLevel={userLevel}
          />
        )}
      </main>

      <SubjectDetailModal
        subject={selectedSubject}
        onClose={() => setSelectedSubject(null)}
        onLaunchQuiz={handleLaunchQuiz}
      />
    </div>
  );
}
