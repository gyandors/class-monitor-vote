import { useContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import VoteContext from '../Context/VoteContext';

export default function Modal(props) {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('overlay')
      )}
      {createPortal(
        <Overlay onClick={props.onClick} />,
        document.getElementById('overlay')
      )}
    </>
  );
}

function Backdrop(props) {
  return <div className="backdrop" onClick={() => props.onClick()}></div>;
}

function Overlay(props) {
  const voteCtx = useContext(VoteContext);

  const studentRef = useRef('');
  const monitorRef = useRef('');

  function handleSubmit(event) {
    event.preventDefault();
    voteCtx.onAddVote({
      id: Date.now(),
      name: studentRef.current.value,
      monitor: monitorRef.current.value,
    });
    props.onClick();
  }

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="label-control">
          Student Name
        </label>
        <input type="text" name="name" id="name" ref={studentRef} />

        <label htmlFor="monitor" className="label-control">
          Choose Monitor
        </label>
        <select name="monitor" id="monitor" ref={monitorRef}>
          <option value="Suresh">Suresh</option>
          <option value="Deepank">Deepank</option>
          <option value="Abhik">Abhik</option>
        </select>

        <div className="button-control">
          <button type="submit">Vote</button>
          <button type="reset" onClick={() => props.onClick()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
