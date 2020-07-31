import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { post } from '../../../services/api'

import Loading from '../../../components/Loading'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

import {
  Container, Categories, Category,
} from './styles'

function CategoryRegister() {
  const categoryDefaultValue = {
    name: '',
    description: '',
    color: '',
  }

  const [loading, setLoading] = useState(false)
  const [alternativeContentText, setAlternativeContentText] = useState('')
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState(categoryDefaultValue)

  async function fetchCategories() {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8080/categories')
      const data = await response.json()
      const newData = [...data]

      setCategories(newData)
      setAlternativeContentText(newData.length ? '' : 'No categories registered')
    } catch (err) {
      setAlternativeContentText('Failed to load content')
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  function handleChange(e) {
    const { name, value } = e.target

    setCategory({
      ...category,
      [name]: value,
    })
  }

  function clearCategory() {
    setCategory(categoryDefaultValue)
  }

  async function handleOnSubmit(e) {
    e.preventDefault()

    const response = await post('http://localhost:8080/categories', category)
    const parsedResponse = await JSON.parse(response)

    setCategories([...categories, parsedResponse])
    clearCategory()
  }

  return (
    <PageDefault>

      <Container>

        <Link to="/">
          &lt; Go home
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

          <Button type="submit">
            Save
          </Button>

        </form>
        {
          ((loading || alternativeContentText.length)
            && (
              <div id="contentReplacer">
                {loading && <Loading />}
                {alternativeContentText.length > 0 && (alternativeContentText)}
              </div>
            )
          )
          || (categories.length && (
            <Categories>
              {
                categories.map((c) => (
                  <Category key={c.id} as="li" backgroundColor={c.color}>
                    {c.name}
                  </Category>
                ))
              }
            </Categories>
          ))
        }

      </Container>
    </PageDefault>
  )
}

export default CategoryRegister
