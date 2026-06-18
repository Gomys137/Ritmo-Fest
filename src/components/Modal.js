// components/Modal.js
export default function Modal({ message, show }) {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '30px', right: '30px',
      background: '#1e1e28', borderLeft: '6px solid #f5c518',
      padding: '1rem 2rem', borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.7)', zIndex: 999,
      animation: 'slideIn 0.3s'
    }}>
      {message}
    </div>
  );
}