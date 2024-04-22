// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Votes from './Components/Votes';
import { VoteContextProvider } from './Context/VoteContext';

function App() {
  return (
    <VoteContextProvider>
      <Header />
      <hr />
      <Votes />
    </VoteContextProvider>
  );
}

export default App;
