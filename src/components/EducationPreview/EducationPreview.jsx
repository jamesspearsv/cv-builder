import { ActionPanel } from '../ActionPanel/ActionPanel';
import './EducationPreview.css';

export function EducationPreview({ info, handleEditing, move }) {
  if (!info.education) return;

  return info.education.map((entry, index) => (
    <div
      key={entry.key}
      className='education-entry draggable movable'
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
        <div className='preview-h2'>{entry.school}</div>
        <div>
          <span>{entry.startdate}</span> to <span>{entry.enddate}</span>
        </div>
      </div>
      <div className='entry-major'>{entry.major}</div>
      <div className='wrap'>{entry.recognitions}</div>
      <ActionPanel
        handleEditing={handleEditing}
        section={'education'}
        index={index}
      />
    </div>
  ));
}
