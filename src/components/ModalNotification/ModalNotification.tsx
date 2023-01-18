import { useEffect, useRef } from 'react';

import { Status } from 'ts/interfaces';

import styles from './ModalNotification.module.scss';

interface ModalNotificationProps {
  status: Status;
  closeModalOnClick: () => void;
}

function ModalNotification({ status, closeModalOnClick }: ModalNotificationProps) {
  const className = status.type === 'success' ? styles.success : styles.error;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (status.type) {
      timerRef.current = setTimeout(() => {
        closeModalOnClick();
      }, 2000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [closeModalOnClick, status.type]);

  return (
    <div className={`${styles.modal} ${status.type && styles.active} ${className}`}>
      <div className={`${styles.content} ${status.type && styles.active} ${className}`}>
        <h3 className={styles.title}>{status.text}</h3>
        <button className={styles.close} type="button" onClick={closeModalOnClick} />
      </div>
    </div>
  );
}

export default ModalNotification;
