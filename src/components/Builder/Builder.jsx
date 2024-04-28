import './Builder.css';
import { data } from '../../js/data';
import ArrowClockwise from '../../assets/arrow-clockwise.svg';

import { EducationBuilder } from '../EducationBuilder/EducationBuilder';
import { PersonalBuilder } from '../PersonalBuilder/PersonalBuilder';
import { Workbuilder } from '../WorkBuilder/WorkBuilder';
import { useState } from 'react';
import { Customizer } from '../Customizer/Customizer';

export function Builder({ info, setInfo, style, setStyle }) {
  const [active, setActive] = useState('');

  function handleHeaderClick(e) {
    const newActive = e.target.parentElement.parentElement.id;

    if (newActive === active) setActive('');
    else setActive(newActive);
  }

  function handelReset() {
    const reset = confirm('Are you sure you want to reset?');
    console.log(reset);
    if (reset) setInfo(data);
  }

  return (
    <div id='builder'>
      <div id='builder-header'>
        <h1>CV Builder</h1>
        <button id='reset-button' onClick={handelReset}>
          <img src={ArrowClockwise} alt='round arrow in clockwise direction' />
        </button>
      </div>
      <hr />
      <PersonalBuilder
        info={info}
        setInfo={setInfo}
        active={active}
        handleHeaderClick={handleHeaderClick}
      />
      <EducationBuilder
        info={info}
        setInfo={setInfo}
        active={active}
        handleHeaderClick={handleHeaderClick}
      />
      <Workbuilder
        info={info}
        setInfo={setInfo}
        active={active}
        handleHeaderClick={handleHeaderClick}
      />
      <hr />
      <Customizer style={style} setStyle={setStyle} />
      <div id='link-back'>
        Find the code on
        <a href='https://github.com/jamesspearsv/cv-builder'>Github</a>
      </div>
    </div>
  );
}
