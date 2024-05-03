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

  function handleDeletion(section, index) {
    const confirmation = confirm('Are you sure you want to delete this entry?');
    if (!confirmation) return;

    let array;

    if (section === 'work') array = [...info.work];
    else array = [...info.education];

    array.splice(index, 1);

    if (section === 'work') setInfo({ ...info, work: array });
    else setInfo({ ...info, education: array });
  }

  const move = (() => {
    let moveInfo = {
      section: '',
      currentIndex: '',
      sectionConfirm: '',
      newIndex: '',
    };

    function handleDragStart(e) {
      moveInfo.section = e.target.dataset.section;
      moveInfo.currentIndex = parseInt(e.target.dataset.index);
    }

    function handelDragOver(e) {
      e.preventDefault();
      return false;
    }

    function handleDragEnter(e) {
      e.preventDefault();
      if (e.target.classList.contains('movable')) {
        e.target.classList.add('over');
      }

      moveInfo.sectionConfirm = e.target.dataset.section;
      moveInfo.newIndex = parseInt(e.target.dataset.index);
    }

    function handleDragLeave(e) {
      e.preventDefault();
      e.target.classList.remove('over');
    }

    function handleDrop(e) {
      e.preventDefault();
      if (moveInfo.section !== moveInfo.sectionConfirm) {
        e.target.classList.remove('over');
        return;
      }

      let array;
      if (moveInfo.section === 'work') {
        array = [...info.work];
      } else {
        array = [...info.education];
      }

      const temp = array[moveInfo.currentIndex]; // copy entry being moved
      array.splice(moveInfo.currentIndex, 1); // remove entry being moved
      array.splice(moveInfo.newIndex, 0, temp); // add copied entry

      if (moveInfo.section === 'work') {
        setInfo({ ...info, work: array });
      } else {
        setInfo({ ...info, education: array });
      }
      e.target.classList.remove('over');
    }
    return {
      handleDragStart,
      handelDragOver,
      handleDragEnter,
      handleDrop,
      handleDragLeave,
    };
  })();

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
          handleEditing={handleEditing}
          move={move}
          handleDeletion={handleDeletion}
        />
        <br />
        <div className='preview-h1'>Professional Experience</div>
        <WorkPreview
          info={info}
          setInfo={setInfo}
          handleEditing={handleEditing}
          move={move}
          handleDeletion={handleDeletion}
        />
      </div>
    </>
  );
}
