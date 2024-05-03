import { useState } from 'react';
import { data } from './js/data';
import './App.css';
import { Preview } from './components/Preview/Preview';
import { Builder } from './components/Builder/Builder';

function App() {
  const [info, setInfo] = useState(data);
  const [style, setStyle] = useState({
    fontFamily: 'serif',
    color: 'black',
  });

  return (
    <main>
      <Builder
        info={info}
        setInfo={setInfo}
        style={style}
        setStyle={setStyle}
      />
      <div id='preview-container'>
        <Preview info={info} setInfo={setInfo} style={style} />
      </div>
    </main>
  );
}

export default App;
