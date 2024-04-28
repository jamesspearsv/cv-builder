import './Customizer.css';

export function Customizer(style, setStyle) {
  return (
    <div id='customizer'>
      <button onClick={window.print}>Export CV</button>
      <select name='' id=''>
        <option value='' disabled='true'>
          Font Style
        </option>
        <option value='serif'>Serif</option>
        <option value='san-sefif'>Sans-Serif</option>
      </select>
    </div>
  );
}
