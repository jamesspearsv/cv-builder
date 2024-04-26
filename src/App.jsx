import { useState } from 'react';
import { data } from './js/data';
import './App.css';
import { Preview } from './components/Preview/Preview';
import { Builder } from './components/Builder/Builder';

function App() {
  const [info, setInfo] = useState(data);

  return (
    <main>
      <div id='builder-sidebar'>
        <Builder info={info} setInfo={setInfo} />
      </div>
      <div id='preview-panel'>
        <Preview info={info} setInfo={setInfo} />
      </div>
    </main>
  );
}

export default App;
