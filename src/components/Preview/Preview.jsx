import './Preview.css';

import { EducationPreview } from '../EducationPreview/EducationPreview';
import { PersonalPreview } from '../PersonalPreview/PersonalPreview';
import { WorkPreview } from '../WorkPreview/WorkPreview';

export function Preview({ info, setInfo }) {
  return (
    <div id='preview'>
      <PersonalPreview personal={info.personal} />
      <EducationPreview education={info.education} />
      <WorkPreview work={info.work} />
    </div>
  );
}
