import { ActionPanel } from '../ActionPanel/ActionPanel';
import './WorkPreview.css';

export function WorkPreview({ work, handleEditing }) {
  if (!work) return;

  return work.map((entry, index) => (
    <div
      key={entry.key}
      className='work-entry'
      data-section='work'
      data-index={index}
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
