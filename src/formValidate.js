const formValidate = values => {
  console.log(values)
  const errors = {}

  if (!values.firstname) {
    errors.firstname = 'Firstname is required'
  }

  if (!values.lastname) {
    errors.lastname = 'Lastname is required'
  }

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

export default formValidate
