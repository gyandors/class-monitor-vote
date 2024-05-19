import { useContext, useState } from 'react';
import Modal from './Modal';
import VoteContext from '../Context/VoteContext';

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  const voteCtx = useContext(VoteContext);

  return (
    <>
      {showForm && <Modal onClick={() => setShowForm(false)} />}
      <header className="text-center text-bg-light p-3 ">
        <h1>Class Monitor Vote</h1>
        <p>Total votes: {voteCtx.vote.length}</p>
        <button
          className="btn btn-outline-dark"
          type="button"
          onClick={() => setShowForm(true)}
        >
          Vote here
        </button>
      </header>
    </>
  );
}
