import './PersonalPreview.css';

export function PersonalPreview({ personal }) {
  const divider = '|';
  return (
    <div id='personal-preview'>
      <div id='personal-header' className='preview-h1'>
        {personal.name}
      </div>
      <div id='personal-details'>
        <div>{personal.email}</div>
        <div>{divider}</div>
        <div>{personal.phone}</div>
        <div>{divider}</div>
        <div>{personal.website}</div>
      </div>
    </div>
  );
}
