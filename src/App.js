import Header from './Components/Header';
import Votes from './Components/Votes';
import { VoteContextProvider } from './Context/VoteContext';

function App() {
  return (
    <VoteContextProvider>
      <Header />
      <Votes />
    </VoteContextProvider>
  );
}

export default App;
