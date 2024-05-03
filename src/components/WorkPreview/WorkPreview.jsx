import { ActionPanel } from '../ActionPanel/ActionPanel';
import './WorkPreview.css';

export function WorkPreview({ info, handleEditing, move }) {
  if (!info.work) return;

  return info.work.map((entry, index) => (
    <div
      key={entry.key}
      className='work-entry draggable movable'
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
