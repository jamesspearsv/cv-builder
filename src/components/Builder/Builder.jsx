import './Builder.css';
import { data } from '../../js/data';
import { testData } from '../../js/testData';
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

  function loadTestData() {
    setInfo(testData);
  }

  return (
    <div id='builder' className='no-print'>
      <div id='builder-header'>
        <h1>CV Builder</h1>
        <button id='reset-button' onClick={handelReset}>
          <img src={ArrowClockwise} alt='round arrow in clockwise direction' />
        </button>
      </div>
      <Customizer style={style} setStyle={setStyle} />
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
        setActive={setActive}
      />
      <Workbuilder
        info={info}
        setInfo={setInfo}
        active={active}
        handleHeaderClick={handleHeaderClick}
        setActive={setActive}
      />
      <hr />
      <div id='link-back'>
        <p>
          Find the code on
          <a href='https://github.com/jamesspearsv/cv-builder'>Github</a>
        </p>
        <button className='button' onClick={loadTestData}>
          Load Test Data
        </button>
      </div>
    </div>
  );
}
