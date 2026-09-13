import React, { useState } from 'react';
import { Send, Volume2, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

export default function AITutorView({ subjects }) {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: 'Buna Sofia! 👋 Eu sunt asistentul tău personal de învățare pentru clasa a V-a. Poți să mă întrebi orice din manualele tale de Biologie, Matematică, Română, Istorie sau Geografie! Ce vrei să descoperim azi?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const presets = [
    ' Explică-mi ca pentru 10 ani: Ce este celula?',
    '📐 Cum adun două fracții cu numitori diferiți?',
    '🏛️ De ce au fost construite Piramidele în Egipt?',
    '📖 Ce este o personificare și dă-mi 2 exemple',
    '🌍 De ce avem anotimpuri pe Pământ?'
  ];

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    if (!userText) setInput('');

    // Generate intelligent tutor response for 5th grade curriculum
    setTimeout(() => {
      let reply = generateTutorReply(textToSend);
      setMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
    }, 600);
  };

  const generateTutorReply = (query) => {
    const q = query.lowerCase ? query.lowerCase() : query.toLowerCase();

    if (q.includes('celula') || q.includes('biologie')) {
      return '🧬 <strong>Celula</strong> este ca o căsuță minusculă din care sunt construite toate viețuitoarele! Gândește-te la ea ca la o piesă de LEGO. Are un "centru de comandă" numit <em>nucleu</em>, o ușiță protectoare numită <em>membrană</em> și o substanță gelatinoasă numită <em>citoplasmă</em>. Plantele au în plus cloroplaste, care le ajută să prepare hrană din lumina soarelui!';
    }
    if (q.includes('fracții') || q.includes('fracții') || q.includes('matematic')) {
      return '📐 Pentru a aduce două fracții la același numitor: găsești cel mai mic multiplu comun al numitorilor, amplifici fracțiile și apoi aduni doar numărătorii! De exemplu: 1/2 + 1/4 = 2/4 + 1/4 = 3/4. Simplu ca o felie de pizza!';
    }
    if (q.includes('piramid') || q.includes('istorie') || q.includes('egipt')) {
      return '🏛️ Piramidele au fost ridicate acum peste 4.500 de ani în Egiptul Antic drept morminte uimitoare pentru Faraoni! Blocurile uriașe de piatră cântăreau cât doi elefanți fiecare, iar Faraonii erau îngropați cu comori spectaculoase.';
    }
    if (q.includes('personific') || q.includes('român') || q.includes('figura')) {
      return '📖 <strong>Personificarea</strong> este o figură de stil prin care oferim însușiri omenești obiectelor sau animalelor! De exemplu: <em>"Soarele zâmbește vesel pe cer"</em> sau <em>"Vântul șoptește printre frunze"</em>.';
    }
    if (q.includes('anotimp') || q.includes('pământ') || q.includes('geograf')) {
      return '🌍 Anotimpurile apar din cauză că axa Pământului este înclinată în timp ce se rotește în jurul Soarelui (mișcarea de revoluție, care durează 365 de zile). Când o jumătate de Pământ e înclinată spre Soare, acolo este vară!';
    }

    return `Super întrebare! Raportat la programa de clasa a V-a: Conceptele din această lecție se bazează pe observare directă și exercițiu. Vrei să facem un mic quiz sau să-ți dau un exemplu practic? 🚀`;
  };

  const speakText = (htmlText) => {
    if (!('speechSynthesis' in window)) return;
    const cleanText = htmlText.replace(/<[^>]*>/g, '');
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ro-RO';
    utterance.rate = 0.95;
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="tutor-container">
      <div className="tutor-sidebar">
        <div className="tutor-avatar-box">
          <div className="tutor-avatar">🤖</div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>Tutor AI Sofia</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ghidul tău inteligent la clasa a V-a</p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>
            💡 Întrebări rapide:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {presets.map((preset, idx) => (
              <button key={idx} className="preset-chip" onClick={() => handleSend(preset)}>
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="chat-box">
        <div className="messages-list">
          {messages.map((msg, index) => (
            <div key={index} className={`message-bubble ${msg.sender}`}>
              <div dangerouslySetInnerHTML={{ __html: msg.text }} />
              {msg.sender === 'assistant' && (
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#a855f7',
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                  onClick={() => speakText(msg.text)}
                >
                  <Volume2 size={14} /> Ascultă explicația
                </button>
              )}
            </div>
          ))}
        </div>

        <form
          className="chat-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            type="text"
            className="chat-input"
            placeholder="Scrie o întrebare pentru tutorul tău (ex: Cum funcționează un microscop?)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="send-btn">
            <Send size={18} /> Întreabă
          </button>
        </form>
      </div>
    </div>
  );
}
