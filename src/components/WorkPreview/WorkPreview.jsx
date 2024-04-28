import './WorkPreview.css';

export function WorkPreview({ work }) {
  if (!work) return;

  return work.map((entry) => (
    <div key={entry.key} className='work-entry'>
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
    </div>
  ));
}
