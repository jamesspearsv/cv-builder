import { v4 as uuid } from 'uuid';
import Chevron from '../../assets/chevron.svg';

export function Workbuilder({ info, setInfo, active, handleHeaderClick }) {
  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;

    const entry = {
      key: uuid(),
      company: elements.company.value,
      positiontitle: elements.positiontitle.value,
      location: elements.location.value,
      startdate: elements.startdate.value,
      enddate: elements.enddate.value,
      responsibilities: elements.responsibilities.value,
    };

    console.log(entry.responsibilities);

    const updatedWork = info.work.slice();
    updatedWork.push(entry);
    setInfo({ ...info, work: updatedWork });
  }

  return (
    <div
      id='work-builder'
      className={active !== 'work-builder' ? 'inactive' : ''}
    >
      <div className='builder-section-header'>
        <h2>Professional Experience</h2>
        <img src={Chevron} onClick={handleHeaderClick} />
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='comapany'>Company</label>
          <input type='text' name='company' />
        </div>
        <div className='form-group'>
          <label htmlFor='positiontitle'>Position Title</label>
          <input type='text' name='positiontitle' />
        </div>
        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input type='text' name='startdate' />
        </div>
        <div className='form-group'>
          <label htmlFor='enddate'>Finish Date</label>
          <input type='text' name='enddate' />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input type='text' name='location' />
        </div>
        <div className='form-group'>
          <label htmlFor='responsibilities'>Responsibilities</label>
          <textarea name='responsibilities' cols='30' rows='5'></textarea>
        </div>
        <input type='submit' value='Add' />
      </form>
    </div>
  );
}
