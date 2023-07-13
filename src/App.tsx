import './App.css';
import AlertDialog from './components/alert/AlertDialog';
import ConfirmDialog from './components/confirm/ConfirmDialog';
import Home from './pages/Home';

function App() {
  return (
    <AlertDialog>
      <ConfirmDialog>
        <Home />
      </ConfirmDialog>
    </AlertDialog>
  );
}

export default App;
