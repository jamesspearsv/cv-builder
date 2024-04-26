import { v4 as uuid } from 'uuid';
import Chevron from '../../assets/chevron.svg';

export function EducationBuilder({ info, setInfo, active, handleHeaderClick }) {
  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const entry = {
      key: uuid(),
      school: elements.school.value,
      major: elements.major.value,
      startdate: elements.startdate.value,
      enddate: elements.enddate.value,
    };

    console.log(entry.key);

    const updatedEducation = info.education.slice();
    updatedEducation.push(entry);

    setInfo({ ...info, education: updatedEducation });
  }

  return (
    <div
      id='education-builder'
      className={active !== 'education-builder' ? 'inactive' : ''}
    >
      <div className='builder-section-header'>
        <h2>Education</h2>
        <img src={Chevron} onClick={handleHeaderClick} />
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='school'>School</label>
          <input type='text' name='school' />
        </div>
        <div className='form-group'>
          <label htmlFor='major'>Major</label>
          <input type='text' name='major' />
        </div>
        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input type='text' name='startdate' />
        </div>
        <div className='form-group'>
          <label htmlFor='enddate'>Finish Date</label>
          <input type='text' name='enddate' />
        </div>
        <input type='submit' value='Add' />
      </form>
    </div>
  );
}
