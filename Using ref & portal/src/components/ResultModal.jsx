import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));

  return (
    <dialog className="result-modal" ref={dialog}>
      {userLost && <h2>you lost</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>

      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
