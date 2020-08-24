import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

import useForm from '../../../hooks/useForm'

import videosRepository from '../../../repositores/videos'
import categoriesRepository from '../../../repositores/categories'

import PageDefault from '../../../components/PageDefault'
import MySelect from '../../../components/MySelect'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

import { Container } from './styles'

function VideoRegister() {
  const defaultValues = {
    title: '',
    url: '',
    categoryId: undefined,
  }

  const [categories, setCategories] = useState([])
  const { values, handleChange, changeValue } = useForm(defaultValues)
  const alert = useAlert()
  const history = useHistory()

  async function fetchCategories() {
    setCategories(await categoriesRepository.getAll())
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  async function handleOnSubmit(e) {
    e.preventDefault()

    try {
      await videosRepository.save(values)

      history.push('/', {
        videoSaved: true,
      })
    } catch (err) {
      alert.show(err.message, { type: 'error' })
    }
  }

  function onCategoryChange(name, newCategory) {
    changeValue(name, newCategory.id)
  }

  return (
    <PageDefault>
      <Container>
        <header>
          <h1>Video register</h1>

          <Link to="/register/category">New category</Link>
        </header>

        <form onSubmit={handleOnSubmit}>
          <FormField
            label="Name"
            type="text"
            name="title"
            value={values.title}
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
            label="URL"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <MySelect
            value={categories.find((c) => c.id === values.categoryId)}
            options={categories}
            onChange={onCategoryChange}
            name="categoryId"
          />

          <Button type="submit">Save</Button>
        </form>
      </Container>
    </PageDefault>
  )
}

export default VideoRegister
