// components/Hero.js
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Garantir que o vídeo reproduza automaticamente
    if (videoRef.current) {
      // Força o carregamento do vídeo
      videoRef.current.load();
      
      // Tenta reproduzir
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Vídeo reproduzindo automaticamente");
          })
          .catch(error => {
            console.log("Autoplay bloqueado:", error);
            // Tenta novamente após interação do usuário (mobile)
            document.addEventListener('click', () => {
              videoRef.current.play().catch(e => console.log(e));
            }, { once: true });
          });
      }
    }
  }, []);

  return (
    <section className="hero">
      {/* Vídeo de fundo */}
      <div className="hero-video-container">
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          preload="auto"
          disableRemotePlayback
        >
          {/* 👇 CORREÇÃO: Alterado para video-header.mp4 */}
          <source src="/video-header.mp4" type="video/mp4" />
          Seu browser não suporta vídeo HTML5.
        </video>
        {/* Overlay escuro para melhor visibilidade do texto */}
        <div className="hero-overlay"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo-container">
            <Image 
              src="/logo.png" 
              alt="Ritmo Fest Logo" 
              width={500} 
              height={200}
              className="hero-logo"
              priority
            />
          </div>
          
          <p className="hero-dates">16 · 17 JUNHO 2026</p>
          
          <div className="hero-location">
            <svg className="location-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <span>Parque das Nações, Lisboa</span>
          </div>

          <a href="#tickets" className="hero-cta">
            GARANTE O TEU BILHETE
          </a>
        </div>
      </div>
    </section>
  );
}