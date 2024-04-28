import './EducationPreview.css';

export function EducationPreview({ education }) {
  if (!education) return;

  return education.map((entry) => (
    <div key={entry.key} className='education-entry'>
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
    </div>
  ));
}
