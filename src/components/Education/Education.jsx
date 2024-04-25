export function Education(info, setInfo) {
  function handleSubmit(e) {
    const elements = e.target.elements;
  }

  return (
    <div id='education-form'>
      <h2>Education</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='school'>School</label>
          <input type='text' name='school' />
        </div>
        <div className='form-group'>
          <label htmlFor='major'>Major</label>
          <input type='text' name='major' />
        </div>
        <div className='form-group-horizontal'>
          <div className='form-group'>
            <label htmlFor='startdate'>Start Date</label>
            <input type='text' name='startdate' />
          </div>
          <div className='form-group'>
            <label htmlFor='enddate'>Finish Date</label>
            <input type='text' name='enddate' />
          </div>
        </div>
      </form>
    </div>
  );
}
