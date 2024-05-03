import { v4 as uuid } from 'uuid';
import Chevron from '../../assets/chevron.svg';
import { data } from '../../js/data';

export function Workbuilder({
  info,
  setInfo,
  active,
  setActive,
  handleHeaderClick,
}) {
  function handleChange(e) {
    const key = e.target.name;
    const workEntry = { ...info.workEntry };
    workEntry[key] = e.target.value;

    setInfo({ ...info, workEntry });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const entry = info.workEntry;
    entry.key = uuid();

    const updatedWork = [...info.work];

    const updatedEducation = info.education.slice();
    if (info.edit.isEditing && info.edit.section === 'work') {
      updatedWork[info.edit.index] = entry;
    } else {
      updatedWork.push(entry);
    }

    setInfo({
      ...info,
      work: updatedWork,
      workEntry: data.workEntry,
      educationEntry: data.educationEntry,
      edit: data.edit,
    });
  }

  const submitValue =
    info.edit.isEditing && info.edit.section === 'work' ? 'Update' : 'Add';

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
          <input
            type='text'
            name='company'
            onChange={handleChange}
            value={info.workEntry.company}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='positiontitle'>Position Title</label>
          <input
            type='text'
            name='positiontitle'
            onChange={handleChange}
            value={info.workEntry.positiontitle}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='startdate'>Start Date</label>
          <input
            type='text'
            name='startdate'
            onChange={handleChange}
            value={info.workEntry.startdate}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='enddate'>Finish Date</label>
          <input
            type='text'
            name='enddate'
            onChange={handleChange}
            value={info.workEntry.enddate}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            onChange={handleChange}
            value={info.workEntry.location}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='responsibilities'>Responsibilities</label>
          <textarea
            name='responsibilities'
            cols='30'
            rows='5'
            onChange={handleChange}
            value={info.workEntry.responsibilities}
          ></textarea>
        </div>
        <input type='submit' value={submitValue} />
      </form>
    </div>
  );
}
