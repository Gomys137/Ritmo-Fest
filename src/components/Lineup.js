// components/Lineup.js
import Image from 'next/image';

export default function Lineup() {
  const lineupDays = [
    {
      day: "16 JUN",
      stage: "RITMO STAGE",
      artists: [
        "PLUTÓNIO",
        "BÁRBARA BANDEIRA",
        "DJ DIEGO MIRANDA",
        "BISPO",
        "TONY CARREIRA"
      ]
    },
    {
      day: "17 JUN",
      stage: "RITMO STAGE",
      artists: [
        "SORAIA RAMOS",
        "OROCHI",
        "CARMINHO",
        "YASMINE",
        "DJ LIMACOOX",
        "IVANDRO"
      ]
    }
  ];

  return (
    <section id="lineup" className="lineup-section">
      {/* Fundo hero.png */}
      <div className="lineup-background">
        <Image 
          src="/hero.png" 
          alt="Ritmo Fest Background" 
          fill
          className="lineup-bg-image"
          priority
        />
        {/* Overlay com gradiente + textura */}
        <div className="lineup-overlay"></div>
      </div>

      <div className="container">
        <h2 className="lineup-title">LINE-UP</h2>
        
        <div className="lineup-grid">
          {lineupDays.map((day, index) => (
            <div key={index} className="lineup-day">
              <h3 className="day-title">{day.day}</h3>
              <p className="stage-name">{day.stage}</p>
              <div className="artists-list">
                {day.artists.map((artist, idx) => (
                  <span key={idx} className="artist-name">{artist}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}