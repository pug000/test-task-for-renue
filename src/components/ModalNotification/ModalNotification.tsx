import { useEffect, useRef } from 'react';

import { Status, Withdraw } from 'ts/interfaces';

import styles from './ModalNotification.module.scss';

interface ModalNotificationProps {
  status: Status;
  withdraw: Withdraw;
  closeModalOnClick: () => void;
}

function ModalNotification({
  status,
  withdraw,
  closeModalOnClick,
}: ModalNotificationProps) {
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
        {Object.keys(withdraw).length > 0 && (
          <div className={styles.info}>
            <h4 className={styles.infoTitle}>Your change:</h4>
            <div className={styles.infoWrapper}>
              {Object.entries(withdraw).map(([nominal, count]) => (
                <p key={nominal} className={styles.text}>{`${
                  Number(nominal) ? `${nominal} rub.` : nominal
                } x${count}`}</p>
              ))}
            </div>
          </div>
        )}
        <button className={styles.close} type="button" onClick={closeModalOnClick} />
      </div>
    </div>
  );
}

export default ModalNotification;
