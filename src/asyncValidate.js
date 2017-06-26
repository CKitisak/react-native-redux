const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values, dispatch, component) => {
  const key = Object.keys(component.values)[0]
  // to solve input values is undefined problem
  if (!values[key]) values[key] = component.values[key]
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values[key])) {
      let error = {}
      error[key] = key + ' is invalid'
      throw error
    }
  })
}

export default asyncValidate
