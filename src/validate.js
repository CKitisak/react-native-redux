const validate = values => {
  let errors = {}
  if (!values.myInput1) {
    errors.myInput1 = 'required'
  }
  if (!values.myInput2) {
    errors.myInput2 = 'required'
  }
  return errors
}

export default validate
