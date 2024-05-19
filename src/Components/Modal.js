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

    if (studentRef.current.value === '') {
      alert('Please enter the student name');
      return;
    }

    if (monitorRef.current.value === 'monitor') {
      alert('Please select the monitor');
      return;
    }

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
        <div className="mb-4">
          <label htmlFor="name" className="fw-bold mb-1">
            Student Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Enter student name"
            ref={studentRef}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="monitor" className="fw-bold mb-1">
            Choose Monitor
          </label>
          <select
            className="form-select"
            name="monitor"
            id="monitor"
            ref={monitorRef}
          >
            <option value="monitor" selected hidden>
              Select Monitor
            </option>
            <option value="Suresh">Suresh</option>
            <option value="Deepank">Deepank</option>
            <option value="Abhik">Abhik</option>
          </select>
        </div>

        <div className="d-flex justify-content-end gap-3">
          <button className="btn btn-outline-success" type="submit">
            Vote
          </button>
          <button
            className="btn btn-outline-danger"
            type="reset"
            onClick={() => props.onClick()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
