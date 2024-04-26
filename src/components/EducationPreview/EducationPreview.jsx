export function EducationPreview({ education }) {
  if (!education) return;

  return education.map((entry) => (
    <div key={entry.key} draggable='true' className='draggable'>
      <div>{entry.school}</div>
      <div>{entry.major}</div>
      <div>
        <span>{entry.startdate}</span> to <span>{entry.enddate}</span>
      </div>
    </div>
  ));
}
