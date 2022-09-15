import './App.css';
import { useState } from 'react';

import FirstPageForm from './components/firstPage/FirstPageForm';
import SecondPage from './components/secondPage/SecondPage';

function App() {
    const [step, onNext] = useState(0);

  return (
    <div className="App">
        {step === 0  ? <FirstPageForm onNext={onNext} /> : <SecondPage />}
    </div>
  );
}

export default App;
