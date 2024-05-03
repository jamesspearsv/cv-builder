import { ActionPanel } from '../ActionPanel/ActionPanel';
import './WorkPreview.css';

export function WorkPreview({ info, setInfo, handleEditing }) {
  if (!info.work) return;

  let moveInfo = {
    section: '',
    currentIndex: '',
    sectionConfirm: '',
    newIndex: '',
  };

  const move = (() => {
    function handleDragStart(e) {
      moveInfo.section = e.target.dataset.section;
      moveInfo.currentIndex = parseInt(e.target.dataset.index);

      // console.log('section: ' + section);
      // console.log('currentIndex: ' + currentIndex);
    }

    function handelDragOver(e) {
      e.preventDefault();
      return false;
    }

    function handleDragEnter(e) {
      e.preventDefault();
      e.target.classList.add('over');
      moveInfo.sectionConfirm = e.target.dataset.section;
      moveInfo.newIndex = parseInt(e.target.dataset.index);
    }

    function handleDragLeave(e) {
      e.preventDefault();
      e.target.classList.remove('over');
    }

    function handleDrop(e) {
      e.preventDefault();
      if (moveInfo.section !== moveInfo.sectionConfirm) return;

      console.log(moveInfo);
      const work = [...info.work];
      const temp = work[moveInfo.currentIndex]; // copy entry being moved
      work.splice(moveInfo.currentIndex, 1); // remove entry being moved
      work.splice(moveInfo.newIndex, 0, temp); // add copied entry

      setInfo({ ...info, work: work });
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

  return info.work.map((entry, index) => (
    <div
      key={entry.key}
      className='work-entry draggable'
      data-section='work'
      data-index={index}
      draggable='true'
      onDragStart={move.handleDragStart}
      onDragOver={move.handelDragOver}
      onDragEnter={move.handleDragEnter}
      onDragLeave={move.handleDragLeave}
      onDrop={move.handleDrop}
    >
      <div
        className='entry-group'
        style={{ alignItems: 'end', justifyContent: 'space-between' }}
      >
        <div className='preview-h2'>{entry.positiontitle}</div>
        <div>
          <span>{entry.startdate}</span> to <span>{entry.enddate}</span>
        </div>
      </div>
      <div className='entry-group'>
        <div className='work-entry-company'>{entry.company}</div>
        <div>{entry.location}</div>
      </div>
      <div className='wrap'>{entry.responsibilities}</div>
      <ActionPanel
        handleEditing={handleEditing}
        section={'work'}
        index={index}
      />
    </div>
  ));
}
