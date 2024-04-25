export function Display({ info }) {
  const personal = info.personal;
  return (
    <ul>
      {Object.keys(personal).map((key) => (
        <li key={key}>
          {key}: {personal[key]}
        </li>
      ))}
    </ul>
  );
}
