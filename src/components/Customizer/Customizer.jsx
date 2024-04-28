import './Customizer.css';
import printJS from 'print-js';

export function Customizer({ style, setStyle }) {
  function handelChange(e) {
    const key = e.target.id;
    const newStyle = { ...style };
    newStyle[key] = e.target.value;

    setStyle(newStyle);
  }

  return (
    <div id='customizer' className='no-print'>
      <select id='fontFamily' onChange={handelChange}>
        <option disabled selected>
          Font Style
        </option>
        <option value='serif'>Serif</option>
        <option value='sans-serif'>Sans-Serif</option>
      </select>
      <select id='color' onChange={handelChange}>
        <option disabled selected>
          Color
        </option>
        <option value='black'>Black</option>
        <option value='orange'>Orange</option>
        <option value='purple'>Purple</option>
        <option value='darkgreen'>Dark Green</option>
        <option value='dodgerblue'>Dodger Blue</option>
      </select>
      <button onClick={window.print}>Export</button>
    </div>
  );
}
