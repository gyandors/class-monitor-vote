import { useContext } from 'react';
import VoteContext from '../Context/VoteContext';

export default function Votes() {
  const voteCtx = useContext(VoteContext);

  let sureshTotal = 0;
  let deepankTotal = 0;
  let abhikTotal = 0;

  const sureshVoters = [];
  const deepankVoters = [];
  const abhikVoters = [];

  for (const vt of voteCtx.vote) {
    if (vt.monitor === 'Suresh') {
      sureshTotal++;
      sureshVoters.push(
        <ul className="list-group ">
          <li className=" list-group-item" key={vt.id}>
            {vt.name}{' '}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteVote(vt.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      );
    } else if (vt.monitor === 'Deepank') {
      deepankTotal++;
      deepankVoters.push(
        <ul className="list-group ">
          <li className="mb-2 list-group-item" key={vt.id}>
            {vt.name}{' '}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteVote(vt.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      );
    } else {
      abhikTotal++;
      abhikVoters.push(
        <ul className="list-group ">
          <li className="mb-2 list-group-item" key={vt.id}>
            {vt.name}{' '}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteVote(vt.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      );
    }
  }

  function handleDeleteVote(id) {
    voteCtx.onRemoveVote(id);
  }

  return (
    <div className="container mt-5 d-flex justify-content-between flex-wrap gap-2 border rounded p-3">
      <div>
        <h2>Suresh</h2>
        <p>Total: {sureshTotal}</p>
        {sureshVoters}
      </div>
      <div>
        <h2>Deepank</h2>
        <p>Total: {deepankTotal}</p>
        {deepankVoters}
      </div>
      <div>
        <h2>Abhik</h2>
        <p>Total: {abhikTotal}</p>
        {abhikVoters}
      </div>
    </div>
  );
}
