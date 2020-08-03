import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import useForm from '../../../hooks/useForm'

import categoriesRepository from '../../../repositores/categories'

import Loading from '../../../components/Loading'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

import {
  Container, Categories, Category, CategoryDeleteButton,
} from './styles'

function CategoryRegister() {
  const defaultValues = {
    name: '',
    description: '',
    color: '',
  }

  const { values, handleChange, clearValues } = useForm(defaultValues)
  const alert = useAlert()

  const [loading, setLoading] = useState(false)
  const [alternativeContentText, setAlternativeContentText] = useState('')
  const [categories, setCategories] = useState([])

  async function fetchCategories() {
    setLoading(true)

    try {
      const data = await categoriesRepository.getAll()
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

  async function handleOnSubmit(e) {
    e.preventDefault()

    try {
      const data = await categoriesRepository.save(values)
      setCategories([...categories, data])
      clearValues()
      alert.show('Category added')
    } catch (err) {
      alert.show('Failed to save the category', { type: 'error' })
    }
  }

  async function handleDeleteCategory(category) {
    try {
      await categoriesRepository.remove(category)
      setCategories(categories.filter((c) => c.id !== category.id))
    } catch (err) {
      alert.show('error', { type: 'error' })
    }
  }

  return (
    <PageDefault>

      <Container>

        <h1>Category register</h1>

        <form onSubmit={handleOnSubmit}>

          <FormField
            label="Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <FormField
            label="Description"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormField
            label="Color"
            type="color"
            name="color"
            value={values.color}
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
          || (categories.length > 0 && (
            <Categories>
              {
                categories.map((c) => (
                  <Category key={c.id} as="li" backgroundColor={c.color}>
                    {c.name}

                    <CategoryDeleteButton as="a" type="button" onClick={() => handleDeleteCategory(c)}>Delete</CategoryDeleteButton>
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
