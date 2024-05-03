import { v4 as uuid } from 'uuid';
import Chevron from '../../assets/chevron.svg';
import { data } from '../../js/data';

export function EducationBuilder({ info, setInfo, active, handleHeaderClick }) {
  function handleChange(e) {
    const key = e.target.name;
    const educationEntry = { ...info.educationEntry };
    educationEntry[key] = e.target.value;

    setInfo({ ...info, educationEntry });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const entry = info.educationEntry;
    entry.key = uuid();

    const updatedEducation = info.education.slice();
    if (info.edit.isEditing && info.edit.section === 'education') {
      updatedEducation[info.edit.index] = entry;
    } else {
      updatedEducation.push(entry);
    }

    setInfo({
      ...info,
      education: updatedEducation,
      educationEntry: data.educationEntry,
      edit: data.edit,
      workEntry: data.workEntry,
    });
  }

  const submitValue =
    info.edit.isEditing && info.edit.section === 'education' ? 'Update' : 'Add';

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
          <input
            type='text'
            name='school'
            value={info.educationEntry.school}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='major'>Degree Type</label>
          <input
            type='text'
            name='major'
            value={info.educationEntry.major}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input
            type='text'
            name='startdate'
            value={info.educationEntry.startdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='enddate'>Finish Date</label>
          <input
            type='text'
            name='enddate'
            value={info.educationEntry.enddate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='recognitions'>Recogniations & Achievements</label>
          <textarea
            name='recognitions'
            id=''
            cols='30'
            rows='5'
            value={info.educationEntry.recognitions}
            onChange={handleChange}
          ></textarea>
        </div>
        <input type='submit' value={submitValue} />
      </form>
    </div>
  );
}
