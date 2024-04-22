import { useContext } from 'react';
import VoteContext from '../Context/VoteContext';

export default function Votes() {
  const voteCtx = useContext(VoteContext);

  let sureshTotal = 0;
  let deepankTotal = 0;
  let abhikTotal = 0;

  for (const vt of voteCtx.vote) {
    if (vt.monitor === 'Suresh') sureshTotal++;
    else if (vt.monitor === 'Deepank') deepankTotal++;
    else abhikTotal++;
  }

  function handleDeleteVote(id) {
    voteCtx.onRemoveVote(id);
  }

  return (
    <div>
      <div>
        <h2>Suresh</h2>
        <p>Total: {sureshTotal}</p>
        <ul>
          {voteCtx.vote.map((v) => {
            if (v.monitor === 'Suresh') {
              return (
                <li key={v.id}>
                  {v.name}{' '}
                  <button onClick={() => handleDeleteVote(v.id)}>Delete</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div>
        <h2>Deepank</h2>
        <p>Total: {deepankTotal}</p>
        <ul>
          {voteCtx.vote.map((v) => {
            if (v.monitor === 'Deepank') {
              return (
                <li key={v.id}>
                  {v.name}{' '}
                  <button onClick={() => handleDeleteVote(v.id)}>Delete</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div>
        <h2>Abhik</h2>
        <p>Total: {abhikTotal}</p>
        <ul>
          {voteCtx.vote.map((v) => {
            if (v.monitor === 'Abhik') {
              return (
                <li key={v.id}>
                  {v.name}{' '}
                  <button onClick={() => handleDeleteVote(v.id)}>Delete</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
