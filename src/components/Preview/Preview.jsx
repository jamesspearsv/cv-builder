import './Preview.css';

import { EducationPreview } from '../EducationPreview/EducationPreview';
import { PersonalPreview } from '../PersonalPreview/PersonalPreview';
import { WorkPreview } from '../WorkPreview/WorkPreview';

export function Preview({ info, style }) {
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
        <EducationPreview education={info.education} />
        <br />
        <div className='preview-h1'>Professional Experience</div>
        <WorkPreview work={info.work} />
      </div>
    </>
  );
}
