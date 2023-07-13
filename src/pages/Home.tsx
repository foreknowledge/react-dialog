import { useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';
import ConfirmContext from '../context/confirm/ConfirmContext';

type ActionType = {
  action: 'browser' | 'custom';
};

const Home = () => {
  const { alert: alertComp } = useContext(AlertContext);

  const onAlertClick = async ({ action }: ActionType) => {
    if (action === 'browser') {
      const result = alert('hello world');
      console.log('browser', result);
    }
    if (action === 'custom') {
      const result = await alertComp('hello world');
      console.log('custom', result);
    }
  };

  const { confirm: confirmComp } = useContext(ConfirmContext);

  const onConfirmClick = async ({ action }: ActionType) => {
    if (action === 'browser') {
      const result = confirm('are you sure?');
      console.log('browser', result);
    }
    if (action === 'custom') {
      const result = await confirmComp('are you sure?');
      console.log('cusrom', result);
    }
  };

  const onPromptClick = ({ action }: ActionType) => {
    if (action === 'browser') {
      const result = prompt('what is your name?');
      console.log(result);
    }
  };

  return (
    <main className="home">
      <h1>Home</h1>
      <p>Click the buttons below to see the dialogs</p>
      <div className="buttons">
        <button onClick={() => onAlertClick({ action: 'browser' })}>
          alert (browser)
        </button>
        <button onClick={() => onAlertClick({ action: 'custom' })}>
          alert (component)
        </button>
        <button onClick={() => onConfirmClick({ action: 'browser' })}>
          confirm (browser)
        </button>
        <button onClick={() => onConfirmClick({ action: 'custom' })}>
          confirm (component)
        </button>
        <button onClick={() => onPromptClick({ action: 'browser' })}>
          prompt (browser)
        </button>
      </div>
    </main>
  );
};

export default Home;
