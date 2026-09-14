import React, { useState } from 'react';
import { Send, Volume2, Bot } from 'lucide-react';

export default function AITutorView({ subjects }) {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: 'Buna Sofia! 👋 Eu sunt asistentul tău personal de învățare. Poți să mă întrebi orice din manualele tale de clasa a V-a! Ce vrei să descoperim azi?'
    }
  ]);
  const [input, setInput] = useState('');

  const presets = [
    '🧬 Ce este celula?',
    '📐 Adunarea fracțiilor',
    '🏛️ Piramidele din Egipt',
    '📖 Ce este o personificare?',
    '🌍 De ce avem anotimpuri?'
  ];

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    if (!userText) setInput('');

    setTimeout(() => {
      let reply = generateTutorReply(textToSend);
      setMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
    }, 500);
  };

  const generateTutorReply = (query) => {
    const q = query.toLowerCase();

    if (q.includes('celula') || q.includes('biologie')) {
      return '🧬 <strong>Celula</strong> este ca o căsuță minusculă din care sunt construite toate viețuitoarele! Are un <em>nucleu</em> (centru de comandă), o <em>membrană</em> (ușiță protectoare) și <em>citoplasmă</em>. Plantele au în plus cloroplaste!';
    }
    if (q.includes('fracț') || q.includes('matematic')) {
      return '📐 Pentru a aduce două fracții la același numitor: găsești cel mai mic multiplu comun al numitorilor, amplifici fracțiile și aduni doar numărătorii!';
    }
    if (q.includes('piramid') || q.includes('istorie')) {
      return '🏛️ Piramidele au fost ridicate acum peste 4.500 de ani în Egiptul Antic drept morminte monumentale pentru Faraoni!';
    }
    if (q.includes('personific') || q.includes('român')) {
      return '📖 <strong>Personificarea</strong> dă viață obiectelor sau fenomenelor! Exemple: <em>"Soarele zâmbește vesel"</em> sau <em>"Vântul șoptește"</em>.';
    }
    if (q.includes('anotimp') || q.includes('geograf')) {
      return '🌍 Anotimpurile apar din cauză că axa Pământului este înclinată în timp ce se rotește în jurul Soarelui!';
    }

    return `Super întrebare! Raportat la programa de clasa a V-a: Această noțiune se bazează pe observare și exerciții directe. Vrei să facem un test rapid? 🚀`;
  };

  const speakText = (htmlText) => {
    if (!('speechSynthesis' in window)) return;
    const cleanText = htmlText.replace(/<[^>]*>/g, '');
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ro-RO';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="mobile-tutor-shell">
      <div className="mobile-presets-scroll">
        {presets.map((preset, idx) => (
          <button key={idx} className="mobile-preset-pill" onClick={() => handleSend(preset)}>
            {preset}
          </button>
        ))}
      </div>

      <div className="mobile-chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`mobile-chat-bubble ${msg.sender}`}>
            <div dangerouslySetInnerHTML={{ __html: msg.text }} />
            {msg.sender === 'assistant' && (
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#c084fc',
                  cursor: 'pointer',
                  marginTop: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}
                onClick={() => speakText(msg.text)}
              >
                <Volume2 size={13} /> Ascultă cu Voce
              </button>
            )}
          </div>
        ))}
      </div>

      <form
        className="mobile-chat-input-bar"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          type="text"
          className="mobile-chat-input"
          placeholder="Întreabă-mă ceva din lectii..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="mobile-send-btn">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
