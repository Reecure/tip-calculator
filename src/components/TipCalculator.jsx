import { useState } from 'react';
import styles from './TipCalculator.module.css';
import PercentsButton from './UI/PercentsButton';
import buttons from './data/data';

function TipCalculator() {
  const [billValue, setBillValue] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [percentValue, setPercentValue] = useState(1);
  const [active, setActive] = useState('0');
  const [customPercent, setCustomPercent] = useState('');

  const TIP_AMOUNT_RESULT =
    customPercent > 1
      ? ((billValue / peopleCount) * (parseFloat(customPercent) / 100)).toFixed(
          2
        )
      : ((billValue / peopleCount) * (parseFloat(percentValue) / 100)).toFixed(
          2
        );

  const TOTAL_RESULT = (billValue / peopleCount).toFixed(2);

  const resetHandler = (e) => {
    e.preventDefault();
    setBillValue('');
    setPeopleCount('');
  };

  const customPercentHandler = () => {
    setCustomPercent('');
  };

  const percentClickHandler = (e) => {
    setActive(e);
  };

  const percentValueHandler = (percent) => {
    setPercentValue(percent);
  };

  return (
    <div className={styles.mainBlock}>
      <div className={styles.leftBlock}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Bill</p>
            <span
              className={
                billValue > 0 ? `${styles.invisible}` : `${styles.err}`
              }
            >
              Can't be zero
            </span>
          </div>

          <input
            className={styles.billInput}
            placeholder="0"
            value={billValue}
            onChange={(e) => setBillValue(e.target.value)}
          />
        </div>

        <div>
          <p>Select Tip %</p>
          <div className={styles.buttonsPercent}>
            {buttons.map(({ id, value }, i) => {
              return (
                <div key={id}>
                  <PercentsButton
                    customPercentReset={customPercentHandler}
                    percentValue={percentValueHandler}
                    active={active}
                    toggle={percentClickHandler}
                    id={id}
                  >
                    {value}
                  </PercentsButton>
                </div>
              );
            })}
            <input
              type="text"
              placeholder="Custom"
              value={customPercent}
              onChange={(e) => setCustomPercent(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.peoplesCountBlock}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Number of People</p>
            <span
              className={
                peopleCount > 0 ? `${styles.invisible}` : `${styles.err}`
              }
            >
              Can't be zero
            </span>
          </div>

          <input
            value={peopleCount}
            placeholder="0"
            onChange={(e) => setPeopleCount(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.rightBlock}>
        <div>
          <p>Tip Amount / person</p>
          <div>
            {!isNaN(TIP_AMOUNT_RESULT) ? (
              <p>${TIP_AMOUNT_RESULT}</p>
            ) : (
              <p>$ 0</p>
            )}
          </div>
        </div>
        <div>
          <p>Total/ person</p>
          <div>
            {!isNaN(TOTAL_RESULT) ? <p>${TOTAL_RESULT}</p> : <p>$ 0</p>}
          </div>
        </div>
        <button onClick={resetHandler} className={styles.resetButton}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default TipCalculator;
