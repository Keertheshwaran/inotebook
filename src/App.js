import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import UserDetailContext from './context/UserDetailContext';

function App() {
  return (
<UserDetailContext>
  <Counter/>
</UserDetailContext>
  );
}

export default App;
