const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values, dispatch, component) => {
  console.log(values)
  const key = Object.keys(component.values)[0]
  // to solve input values is undefined problem
  if (!values[key]) values[key] = component.values[key]
  console.log(key, component.values)
  return sleep(1000).then(() => {
    console.log(values[key])
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values[key])) {
      let error = {}
      error[key] = key + ' is invalid'
      throw error
    }
  })
}

export default asyncValidate
