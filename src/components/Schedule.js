// components/Schedule.js

const scheduleData = [
  {
    day: 'Dia 16',
    subtitle: 'Quarta-feira',
    artists: [
      { time: '16:00', artist: 'DJ Diego Miranda', stage: 'Abertura' },
      { time: '18:00', artist: 'Tony Carreira', stage: 'Palco Principal' },
      { time: '19:00', artist: 'Plutonio', stage: 'Palco Principal' },
      { time: '20:00', artist: 'Bispo', stage: 'Palco Principal' },
      { time: '21:00', artist: 'Bárbara Bandeira', stage: 'Palco Principal' },
      { time: '22:00', artist: 'Central Cee', stage: 'Palco Principal', special: true },
    ]
  },
  {
    day: 'Dia 17',
    subtitle: 'Quinta-feira',
    artists: [
      { time: '16:00', artist: 'DJ Limacoox', stage: 'Abertura' },
      { time: '18:00', artist: 'Carminho', stage: 'Palco Principal' },
      { time: '19:00', artist: 'Ivandro', stage: 'Palco Principal' },
      { time: '20:00', artist: 'Yasmine', stage: 'Palco Principal' },
      { time: '21:00', artist: 'Soraia Ramos', stage: 'Palco Principal' },
      { time: '22:00', artist: 'Orochi', stage: 'Palco Principal (Encerramento)' },
    ]
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="ag-section">
      <div className="ag-container">
        
        <div className="ag-header">
          <h2 className="ag-title">HORÁRIOS</h2>
          <p className="ag-subtitle">Dois dias de música inesquecível</p>
        </div>

        <div className="ag-grid">
          {scheduleData.map((dayData, index) => (
            <div key={index} className="ag-card">
              
              <div className={`ag-card-header ${index === 0 ? 'ag-header-day1' : 'ag-header-day2'}`}>
                <div className="ag-day-info">
                  <span className="ag-day-number">{index === 0 ? '01' : '02'}</span>
                  <div className="ag-day-text">
                    <h3>{dayData.day}</h3>
                    <span>{dayData.subtitle}</span>
                  </div>
                </div>
                <div className="ag-corner-art">
                  {/* Pequeno elemento decorativo para dar ritmo */}
                  <div className="ag-circle"></div>
                </div>
              </div>

              <div className="ag-list">
                {dayData.artists.map((item, i) => (
                  <div 
                    key={i} 
                    className={`ag-item ${item.special ? 'ag-special' : ''}`}
                  >
                    <div className="ag-time-col">
                      <span className="ag-time">{item.time}</span>
                      <span className="ag-line"></span>
                    </div>
                    
                    <div className="ag-artist-col">
                      <h4 className="ag-name">{item.artist}</h4>
                      <span className="ag-stage">{item.stage}</span>
                    </div>

                    {item.special && (
                      <div className="ag-badge-container">
                        <span className="ag-badge">🌟 Surpresa</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="ag-footer">
          <span>* Artista surpresa britânico (Drill UK) no encerramento do Dia 16.</span>
        </div>

      </div>
    </section>
  );
}