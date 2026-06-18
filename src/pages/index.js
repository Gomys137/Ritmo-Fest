// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Lineup from '../components/Lineup';
import Schedule from '../components/Schedule';
import Tickets from '../components/Tickets';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

export default function Home() {
  const [cart, setCart] = useState({ normal: 0, vip: 0 });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addToCart = (type) => {
    setCart(prev => ({ ...prev, [type]: prev[type] + 1 }));
    setModalMessage(`✅ Bilhete ${type === 'normal' ? 'Normal' : 'VIP'} adicionado!`);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2500);
  };

  return (
    <>
      <Head>
        <title>Ritmo Fest 2026 · Bilhetes Oficiais</title>
        <meta name="description" content="Festival Ritmo Fest 2026 - 27 de Junho. Lineup: Carminho, Ivandro, Orochi e mais. Bilhetes Normal e VIP." />
      </Head>

      <Header />
      <Hero />
      <Lineup />
      <Schedule />
      <Tickets cart={cart} onAddToCart={addToCart} />
      <Footer />
      <Modal message={modalMessage} show={showModal} />

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}