import React, { useState } from 'react';
import { X, Gem, Check, ShoppingBag, Sparkles, Crown, Zap, Shield } from 'lucide-react';
import { playChestSound } from '../utils/soundEngine';

export default function GemsShopModal({ gemsCount, onDeductGems, onClose }) {
  const [unlockedItems, setUnlockedItems] = useState(() => {
    const saved = localStorage.getItem('sofia_unlocked_shop_items');
    return saved ? JSON.parse(saved) : ['item-1'];
  });

  const shopItems = [
    {
      id: 'item-1',
      title: 'Ramă Aurie de Profil',
      price: 0,
      icon: '🌟',
      desc: 'Contur auriu strălucitor pentru avatarul Sofiei.'
    },
    {
      id: 'item-2',
      title: 'Coroana de Campion',
      price: 20,
      icon: '👑',
      desc: 'Coroană regală vizibilă în antetul aplicației.'
    },
    {
      id: 'item-3',
      title: 'Scutul de Protecție la Teste',
      price: 35,
      icon: '🛡️',
      desc: 'Îți permite să anulezi o greșeală la quiz!'
    },
    {
      id: 'item-4',
      title: 'Temă Neonică Violet',
      price: 50,
      icon: '🌌',
      desc: 'Fundal galactic neonic de înaltă calitate.'
    }
  ];

  const handleBuyItem = (item) => {
    if (unlockedItems.includes(item.id)) return;
    if (gemsCount < item.price) return;

    onDeductGems(item.price);
    playChestSound();

    const updated = [...unlockedItems, item.id];
    setUnlockedItems(updated);
    localStorage.setItem('sofia_unlocked_shop_items', JSON.stringify(updated));
  };

  return (
    <div className="mobile-modal-overlay" onClick={onClose}>
      <div className="mobile-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-modal-handle" />

        <button className="close-modal-btn" onClick={onClose} style={{ top: '1.25rem', right: '1.25rem' }}>
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', padding: '0.4rem 0.9rem', borderRadius: '16px', color: '#38bdf8', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <Gem size={18} /> {gemsCount} Diamente 💎
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#fff' }}>
            Magazinul Sofiei 🛒
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Folosește diamentele colectate pentru a debloca recompense!
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
          {shopItems.map((item) => {
            const isUnlocked = unlockedItems.includes(item.id);
            const canAfford = gemsCount >= item.price;

            return (
              <div
                key={item.id}
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: isUnlocked ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '0.85rem 1rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700 }}>{item.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>

                {isUnlocked ? (
                  <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                    <Check size={16} /> Echipat
                  </span>
                ) : (
                  <button
                    className="mobile-preset-pill"
                    style={{
                      background: canAfford ? 'linear-gradient(135deg, #a855f7, #ec4899)' : 'rgba(255,255,255,0.06)',
                      borderColor: canAfford ? 'transparent' : 'rgba(255,255,255,0.1)',
                      color: canAfford ? '#fff' : '#64748b',
                      fontWeight: 700,
                      padding: '0.4rem 0.75rem'
                    }}
                    onClick={() => handleBuyItem(item)}
                    disabled={!canAfford}
                  >
                    {item.price} 💎
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
