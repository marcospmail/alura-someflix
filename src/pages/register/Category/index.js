import React from 'react'
import { Link } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'

function CategoryRegister() {
  return (
    <PageDefault>
      <h1>Category register</h1>

      <form>

        <label>
          Category name:
          <input type="text" />

        </label>

        <button>
          Register
        </button>

      </form>

      <Link to="/">
        Go home
      </Link>
    </PageDefault>
  )
}

export default CategoryRegister