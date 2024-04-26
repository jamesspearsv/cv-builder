import './Builder.css';

import { EducationBuilder } from '../Education/EducationBuilder';
import { PersonalBuilder } from '../PersonalBuilder/PersonalBuilder';
import { Workbuilder } from '../WorkBuilder/WorkBuilder';

export function Builder({ info, setInfo }) {
  return (
    <div id='builder'>
      <h1>CV Builder</h1>
      <hr />
      <PersonalBuilder info={info} setInfo={setInfo} />
      <EducationBuilder info={info} setInfo={setInfo} />
      <Workbuilder info={info} setInfo={setInfo} />
      <hr />
      <div id='link-back'>
        Find the code on
        <a href='https://github.com/jamesspearsv/cv-builder'>Github</a>
      </div>
    </div>
  );
}
