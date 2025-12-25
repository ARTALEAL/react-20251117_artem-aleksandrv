import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Блокируем скролл
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.cartModalOverlay} onClick={onClose}>
      <div
        className={styles.cartModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cartModalHeader}>
          <button className={styles.cartCloseBtn} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.cartModalBody}>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
