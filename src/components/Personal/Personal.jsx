export function Personal({ info, setInfo }) {
  function handleChange(e) {
    const key = e.target.name;
    const updatedPersonal = { ...info.personal };
    updatedPersonal[key] = e.target.value;

    setInfo({ ...info, personal: updatedPersonal });
  }

  return (
    <div id='personal-form'>
      <h2>Personal Details</h2>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={info.personal.name}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={info.personal.email}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='text'
            name='phone'
            value={info.personal.phone}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='website'>Website</label>
          <input
            type='text'
            name='website'
            value={info.personal.website}
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
      </form>
    </div>
  );
}
