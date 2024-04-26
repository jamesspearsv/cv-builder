import './PersonalPreview.css';

export function PersonalPreview({ personal }) {
  return (
    <div>
      <div>{personal.name}</div>
      <div className='personal-details'>
        <div>{personal.email}</div>
        <div>{personal.phone}</div>
        <div>{personal.website}</div>
      </div>
    </div>
  );
}
