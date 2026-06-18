// components/Footer.js

export default function Footer() {
  return (
    <>
      {/* CSS EXCLUSIVO DO FOOTER (Embutido aqui para não conflitar) */}
      <style jsx>{`
        .ft-wrapper {
          background-color: #4d2222;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(160, 82, 58, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(233, 167, 78, 0.1) 0%, transparent 50%);
          padding: 1rem 0 1rem 0;
          border-top: 6px solid #e9a74e;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .ft-wrapper::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z' fill='rgba(0,0,0,0.05)'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: cover;
          pointer-events: none;
          z-index: 1;
        }

        .ft-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1.5rem;
        }

        .ft-text {
          color: #fcf6f3;
          font-size: 0.95rem;
          font-weight: 400;
          margin: 0;
          line-height: 1.6;
          letter-spacing: 0.5px;
          opacity: 0.9;
        }

        .ft-subtext {
          color: #c9a69b;
          font-size: 0.85rem;
          margin-top: 0;
          opacity: 0.8;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.5rem;
          width: 100%;
          max-width: 400px;
        }

        @media (max-width: 768px) {
          .ft-wrapper {
            padding: 3rem 0 2.5rem 0;
            border-top-width: 4px;
          }
          .ft-container {
            gap: 1.2rem;
            padding: 0 1.5rem;
          }
          .ft-text {
            font-size: 0.85rem;
          }
          .ft-subtext {
            font-size: 0.75rem;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .ft-wrapper {
            padding: 2.5rem 0 2rem 0;
          }
          .ft-text {
            font-size: 0.8rem;
          }
        }
      `}</style>

      {/* Estrutura HTML do Footer */}
      <footer className="ft-wrapper">
        <div className="ft-container">
          <p className="ft-text">
            © 2027 Ritmo Fest · Todos os direitos reservados · Festival realizado em Lisboa
          </p>
          <p className="ft-subtext">
            Venda oficial de bilhetes · Suporte: bilheteira@ritmofest.pt
          </p>
        </div>
      </footer>
    </>
  );
}