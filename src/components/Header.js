// components/Header.js
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Image 
            src="/logo.png" 
            alt="Ritmo Fest Logo" 
            width={350} 
            height={120}
            className="logo-image"
            priority
          />
        </div>
        <nav className="nav">
          <a href="#lineup">Line-up</a>
          <a href="#schedule">Horários</a>
          <a href="#tickets">Bilhetes</a>
        </nav>
      </div>
    </header>
  );
}