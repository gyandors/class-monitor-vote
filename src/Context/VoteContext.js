import { createContext, useState } from 'react';

const VoteContext = createContext();

export function VoteContextProvider(props) {
  const [vote, setVote] = useState([]);

  function handleAddVote(voter) {
    setVote([...vote, voter]);
  }

  function handleRemoveVote(voterId) {
    const updatedVotes = vote.filter((v) => v.id !== voterId);
    setVote(updatedVotes);
  }

  const voteCtxValue = {
    vote: vote,
    onAddVote: handleAddVote,
    onRemoveVote: handleRemoveVote,
  };

  return (
    <VoteContext.Provider value={voteCtxValue}>
      {props.children}
    </VoteContext.Provider>
  );
}

export default VoteContext;
