// components/Tickets.js
import { useState } from 'react';
import Image from 'next/image';

const ticketTypes = [
  {
    id: 'relvado',
    title: 'Relvado',
    image: '/relvado.png',
    price: 60,
    badge: '',
    features: ['Acesso a 1 dia do festival'],
  },
  {
    id: 'comfort',
    title: 'Golden',
    image: '/golden.png',
    price: 179,
    badge: 'Novo',
    features: [
      'Acesso a 1 dia do festival na área Comfort Zone',
      'Bar e zona de comida exclusivos',
      'WC exclusivo',
      'Vista para o palco',
    ],
  },
  {
    id: 'vip',
    title: 'VIP',
    image: '/vip.jpg',
    price: 115,
    badge: 'Melhor Experiência',
    features: [
      'Acesso a 1 dia do festival na área VIP',
      'Open bar e catering',
      'WC exclusivo',
      'Entrada exclusiva',
      'Ambiente climatizado',
    ],
  },
  {
    id: 'premium',
    title: 'Mobilidade Reduzida',
    image: '/reduzida.png',
    price: 150,
    badge: '',
    features: [
      '10 bilhetes para acesso ao festival num camarote',
      'Open bar e catering',
      'WC exclusivo',
      'Entrada exclusiva',
      'Vista para o palco',
    ],
  },
];

export default function Tickets() {
  const [selectedType, setSelectedType] = useState('vip');
  const [quantities, setQuantities] = useState({
    relvado: 0,
    comfort: 0,
    vip: 1,
    premium: 0,
  });

  const selectedTicket = ticketTypes.find((ticket) => ticket.id === selectedType);
  const total = ticketTypes.reduce(
    (sum, ticket) => sum + quantities[ticket.id] * ticket.price,
    0
  );

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] - 1),
    }));
  };

  return (
    <section id="tickets" className="rt-section">
      <div className="rt-background">
        <Image
          src="/hero.png"
          alt="Ritmo Fest Background"
          fill
          className="rt-bg-image"
          priority
        />

        <div className="rt-overlay"></div>
      </div>

      <div className="rt-container">
        <div className="rt-layout">
          <div className="rt-main">
            <h2 className="rt-title">Bilhetes</h2>

            <div className="rt-grid">
              {ticketTypes.map((ticket) => (
                <div
                  key={ticket.id}
                  className={`rt-card ${selectedType === ticket.id ? 'rt-selected' : ''}`}
                  onClick={() => setSelectedType(ticket.id)}
                >
                  <div className="rt-image-wrap">
                    <img src={ticket.image} alt={ticket.title} className="rt-image" />
                    {ticket.badge && <span className="rt-badge">{ticket.badge}</span>}
                  </div>

                  <div className="rt-content">
                    <h3>{ticket.title}</h3>

                    <ul>
                      {ticket.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rt-actions">
                    <button
                      className="rt-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedType(ticket.id);
                        increase(ticket.id);
                      }}
                    >
                      Entrada de 2 dias - € {(ticket.price * 1.75).toFixed(2)}
                    </button>

                    <button
                      className="rt-btn rt-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedType(ticket.id);
                        increase(ticket.id);
                      }}
                    >
                      Entrada de 1 dia - € {ticket.price.toFixed(2)}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rt-checkout">
            <div className="rt-checkout-header">
              Escolhe a data e o tipo de bilhete
            </div>

            <div className="rt-tabs">
              <button className="rt-active">Entrada diária</button>
              <button>Passe fim de semana</button>
            </div>

            <div className="rt-types">
              {ticketTypes.slice(0, 3).map((ticket) => (
                <button
                  key={ticket.id}
                  className={selectedType === ticket.id ? 'rt-active' : ''}
                  onClick={() => setSelectedType(ticket.id)}
                >
                  {ticket.title}
                </button>
              ))}
            </div>

            <div className="rt-list">
              {ticketTypes.map((ticket) => (
                <div
                  key={ticket.id}
                  className={`rt-item ${selectedType === ticket.id ? 'rt-active' : ''}`}
                >
                  <div>
                    <strong>{ticket.title}</strong>
                    <small>€ {ticket.price},00</small>
                  </div>

                  <div className="rt-qty">
                    <button onClick={() => decrease(ticket.id)}>-</button>
                    <span>{quantities[ticket.id]}</span>
                    <button onClick={() => increase(ticket.id)}>+</button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="rt-add-btn"
              onClick={() => alert('Checkout simulado. Obrigado!')}
            >
              € {total},00 — Adicionar
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}