export function PersonalBuilder({ info, setInfo }) {
  function handleChange(e) {
    const key = e.target.name;
    const updatedPersonal = { ...info.personal };
    updatedPersonal[key] = e.target.value;

    setInfo({ ...info, personal: updatedPersonal });
  }

  return (
    <div id='personal-builder'>
      <h2>
        Personal Details
        <span className='chevron'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-up'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
            />
          </svg>
        </span>
      </h2>
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
