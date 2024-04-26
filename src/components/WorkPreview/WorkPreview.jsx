export function WorkPreview({ work }) {
  if (!work) return;

  return work.map((entry) => (
    <div key={entry.key}>
      <div>{entry.company}</div>
      <div>{entry.positiontitle}</div>
      <div>{entry.startdate}</div>
      <div>{entry.enddate}</div>
    </div>
  ));
}
