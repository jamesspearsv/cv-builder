import './EducationPreview.css';

export function EducationPreview({ education }) {
  if (!education) return;

  const classes = 'education-entry';

  return education.map((entry) => (
    <div key={entry.key} className={classes}>
      <div className='preview-h2'>{entry.school}</div>
      <div>{entry.major}</div>
      <div>
        <span>{entry.startdate}</span> to <span>{entry.enddate}</span>
      </div>
    </div>
  ));
}
