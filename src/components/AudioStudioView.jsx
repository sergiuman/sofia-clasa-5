import React, { useState } from 'react';
import { Volume2, Radio, FileAudio, Copy, Check, ExternalLink, Play, Pause } from 'lucide-react';

export default function AudioStudioView({ subjects }) {
  const [copiedPromptIndex, setCopiedPromptIndex] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);

  const sampleTracks = [
    {
      id: 't1',
      title: '🎙️ Podcast Biologie: Ce este celula și cum trăiesc plantele',
      subject: 'Biologie (Biologie 5.pdf)',
      duration: '4:20 min',
      source: 'Generat cu NotebookLM Audio Overview & ElevenLabs'
    },
    {
      id: 't2',
      title: '🎙️ Storytime Istorie: O zi în Egiptul Antic și Piramidele',
      subject: 'Istorie (Istorie 5.pdf)',
      duration: '5:15 min',
      source: 'Generat cu ElevenLabs Romanian Natural Voice'
    },
    {
      id: 't3',
      title: '🎙️ Ghid audio Matematică: Trucuri rapide pentru Fracții',
      subject: 'Matematică (Matematica 5.pdf)',
      duration: '3:45 min',
      source: 'Generat cu NotebookLM Deep Dive'
    }
  ];

  const notebookLmSteps = [
    '1. Deschide NotebookLM (notebooklm.google.com) și creează un caiet nou numit "Sofia - Clasa 5".',
    '2. Încarcă fișierele PDF din folderul tău (ex: Biologie 5.pdf, Istorie 5.pdf, Matematica 5.pdf).',
    '3. Apasă pe butonul "Audio Overview" (Generate Podcast) pentru a crea o conversație audio stil podcast din manual!',
    '4. Folosește licența ElevenLabs pentru a transforma sintezele create în rezumate audio vorbite cu o voce caldă românească.'
  ];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptIndex(idx);
    setTimeout(() => setCopiedPromptIndex(null), 2000);
  };

  const togglePlayTrack = (trackId) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <div className="audio-studio-card">
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Radio color="#a855f7" size={24} /> Ghid NotebookLM pentru Manualele Sofiei
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          Cum să folosești NotebookLM pentru a genera sinteze audio și podcast-uri din cele 10 manuale PDF:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {notebookLmSteps.map((step, idx) => (
            <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '0.85rem 1rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.9rem' }}>
              {step}
            </div>
          ))}
        </div>

        <a
          href="https://notebooklm.google.com"
          target="_blank"
          rel="noreferrer"
          className="send-btn"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ExternalLink size={18} /> Deschide NotebookLM Google
        </a>
      </div>

      <div className="audio-studio-card">
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FileAudio color="#10b981" size={24} /> ElevenLabs Audio Player
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          Ascultă rezumatele audio generate pentru Sofia din manuale:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          {sampleTracks.map((track) => (
            <div key={track.id} className="audio-track-item">
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.2rem' }}>{track.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{track.subject} • {track.duration}</p>
                <span style={{ fontSize: '0.75rem', color: '#34d399' }}>{track.source}</span>
              </div>

              <button className="play-audio-btn" onClick={() => togglePlayTrack(track.id)}>
                {playingTrack === track.id ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.3)', padding: '1rem', borderRadius: '16px' }}>
          <h4 style={{ color: '#c084fc', fontSize: '0.9rem', marginBottom: '0.4rem' }}>💡 Sugestie de Voce ElevenLabs:</h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>
            Recomandăm vocile <strong>"Adam"</strong> sau <strong>"Bella"</strong> setate pe limba română (Multilingual v2) pentru o narațiune caldă, explicativă și antrenantă!
          </p>
        </div>
      </div>
    </div>
  );
}
