import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SubjectCard from './components/SubjectCard';
import SubjectDetailModal from './components/SubjectDetailModal';
import AITutorView from './components/AITutorView';
import QuizArenaView from './components/QuizArenaView';
import FlashcardsView from './components/FlashcardsView';
import AudioStudioView from './components/AudioStudioView';
import ProgressView from './components/ProgressView';
import { SUBJECTS } from './data/subjectsData';
import './styles/main.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('subjects');
  const [subjectsData, setSubjectsData] = useState(SUBJECTS);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [quizSubjectId, setQuizSubjectId] = useState('biologie');
  const [totalXp, setTotalXp] = useState(650);

  const userLevel = Math.floor(totalXp / 300) + 1;

  const handleAddXp = (amount) => {
    setTotalXp((prev) => prev + amount);
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
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.4rem' }}>
                Manualele Sofiei (Clasa a V-a) 📚
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Alege o materie pentru a explora capitolele din manual, quiz-urile și fișele de studiu.
              </p>
            </div>

            <div className="subjects-grid">
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
            onAddXp={handleAddXp}
            initialSubjectId={quizSubjectId}
          />
        )}

        {activeTab === 'flashcards' && <FlashcardsView subjects={subjectsData} />}

        {activeTab === 'audiostudio' && <AudioStudioView subjects={subjectsData} />}

        {activeTab === 'progress' && (
          <ProgressView
            subjects={subjectsData}
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
