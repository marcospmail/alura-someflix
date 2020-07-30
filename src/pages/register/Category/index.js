import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

import { Categories, Category, SubmitButton } from './styles'

function CategoryRegister() {
  const categoryDefaultValue = {
    name: '',
    description: '',
    color: ''
  }

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState(categoryDefaultValue)

  useEffect(() => {
    const localStorageCategories = localStorage.getItem('categories');

    if (localStorageCategories)
      setCategories(JSON.parse(localStorageCategories))
  }, [])

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  function handleChange(e) {
    const { name, value } = e.target

    setCategory({
      ...category,
      [name]: value
    })
  }

  function handleOnSubmit(e) {
    e.preventDefault()

    setCategories([...categories, category])

    setCategory(categoryDefaultValue)
  }

  return (
    <PageDefault>

      <Link to="/" style={{ float: 'right' }}>
        Go home
      </Link>

      <h1>Category register</h1>

      <form onSubmit={handleOnSubmit}>

        <FormField
          label="Name"
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />

        <SubmitButton type="submit" >
          Save
        </SubmitButton>

      </form>

      <Categories>
        {
          categories.map(category => (
            <Category backgroundColor={category.color}>
              {category.name}
            </Category>
          ))
        }
      </Categories>


    </PageDefault>
  )
}

export default CategoryRegister