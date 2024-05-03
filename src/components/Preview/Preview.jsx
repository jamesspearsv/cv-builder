import './Preview.css';
import { data } from '../../js/data';

import { EducationPreview } from '../EducationPreview/EducationPreview';
import { PersonalPreview } from '../PersonalPreview/PersonalPreview';
import { WorkPreview } from '../WorkPreview/WorkPreview';

export function Preview({ info, setInfo, style }) {
  function handleEditing(section, index) {
    // Enter editing mode
    const edit = {
      isEditing: true,
      section,
      index,
    };

    // Set values for correct builder section
    if (section === 'work') {
      setInfo({
        ...info,
        edit,
        workEntry: info.work[index],
        educationEntry: data.educationEntry,
      });
    } else {
      setInfo({
        ...info,
        edit,
        educationEntry: info.education[index],
        workEntry: data.workEntry,
      });
    }
  }

  return (
    <>
      <div
        id='preview'
        className='preview'
        style={{ fontFamily: style.fontFamily }}
      >
        <PersonalPreview personal={info.personal} />
        <hr
          className='divider'
          style={{ border: `solid 1px ${style.color}` }}
        />
        <div className='preview-h1'>Education</div>
        <EducationPreview
          info={info}
          setInfo={setInfo}
          handleEditing={handleEditing}
        />
        <br />
        <div className='preview-h1'>Professional Experience</div>
        <WorkPreview
          info={info}
          setInfo={setInfo}
          handleEditing={handleEditing}
        />
      </div>
    </>
  );
}
