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
      <div id='builder-sidebar' className='no-print'>
        <Builder
          info={info}
          setInfo={setInfo}
          style={style}
          setStyle={setStyle}
        />
      </div>
      <Preview info={info} setInfo={setInfo} style={style} />
    </main>
  );
}

export default App;
