import { useState } from 'react'

function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues)

  function changeValue(name, value) {
    setValues({
      ...values,
      [name]: value,
    })
  }

  function handleChange(e) {
    const { name, value } = e.target

    changeValue(name, value)
  }

  function clearValues() {
    setValues(defaultValues)
  }

  return {
    values, changeValue, handleChange, clearValues,
  }
}

export default useForm
