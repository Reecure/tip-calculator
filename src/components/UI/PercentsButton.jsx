import styles from './PercentsButton.module.css';

function PercentsButton({
  children,
  active,
  toggle,
  id,
  percentValue,
  customPercentReset,
}) {
  const percentButtonHandler = (e) => {
    e.preventDefault();
    // toggle(e.target.innerText);
    percentValue(e.target.innerText);
    customPercentReset();
  };

  return (
    <>
      <button
        onClick={percentButtonHandler}
        className={
          active === id + '%'
            ? `${styles.percentsButton} ${styles.percentsButtonActive}`
            : `${styles.percentsButton}`
        }
      >
        {children}%
      </button>
    </>
  );
}

export default PercentsButton;
