import { useState } from 'react';
import { data } from './state';
import './App.css';
import { Personal } from './components/Personal/Personal';
import { Display } from './components/Display/Display';
import { Education } from './components/Education/Education';

function App() {
  const [info, setInfo] = useState(data);

  return (
    <main>
      <div id='builder-sidebar'>
        <h1>CV Builder</h1>
        <hr />
        <Personal info={info} setInfo={setInfo} />

        <Education info={info} setInfo={setInfo} />
      </div>
      <div id='display-panel'>
        <Display info={info} />
      </div>
    </main>
  );
}

export default App;
