import React from 'react'
import { Link } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'

function VideoRegister() {
  return (
    <PageDefault>
      <h1>Video register</h1>

      <Link to="/register/category">
        Register category
      </Link>
    </PageDefault>
  )
}

export default VideoRegister