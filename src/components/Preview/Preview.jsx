import './Preview.css';

import { EducationPreview } from '../EducationPreview/EducationPreview';
import { PersonalPreview } from '../PersonalPreview/PersonalPreview';
import { WorkPreview } from '../WorkPreview/WorkPreview';

export function Preview({ info, setInfo }) {
  return (
    <div id='preview' className='preview'>
      <PersonalPreview personal={info.personal} />
      <br />
      <div className='preview-h1'>Education</div>
      <EducationPreview education={info.education} />
      <br />
      <div className='preview-h1'>Professional Experience</div>
      <WorkPreview work={info.work} />
    </div>
  );
}
