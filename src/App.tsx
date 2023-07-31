import './App.css';
import AlertDialog from './components/alert/AlertDialog';
import ConfirmDialog from './components/confirm/ConfirmDialog';
import PromptDialog from './components/prompt/PromptDialog';
import Home from './pages/Home';

function App() {
  return (
    <AlertDialog>
      <ConfirmDialog>
        <PromptDialog>
          <Home />
        </PromptDialog>
      </ConfirmDialog>
    </AlertDialog>
  );
}

export default App;
