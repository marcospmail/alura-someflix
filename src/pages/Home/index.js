import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useAlert } from 'react-alert'

import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import categoriesRepository from '../../repositores/categories'

function Home(props) {
  const [categories, setCategories] = useState([])

  const alert = useAlert()

  async function fetchCategories() {
    const data = await categoriesRepository.getAllWithVideos()
    setCategories(data)
  }

  function comingFromVideoSaved() {
    return props.location.state && props.location.state.videoSaved
  }

  useEffect(() => {
    fetchCategories()

    if (comingFromVideoSaved()) {
      alert.show('Video saved!')
    }
  }, [])

  return (
    <PageDefault fullPage>
      {categories.length > 0 && categories[0].videos.length > 0 && (
        <BannerMain
          videoTitle={categories[0].videos[0].title}
          url={categories[0].videos[0].url}
          videoDescription={categories[0].videos[0].description}
        />
      )}

      {categories.map((c, index) => (
        <Carousel key={c.id} ignoreFirstVideo={index === 0} category={c} />
      ))}
    </PageDefault>
  )
}

Home.defaultProps = {
  location: {
    state: {
      videoSaved: false,
    },
  },
}

Home.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      videoSaved: PropTypes.bool,
    }),
  }),
}

export default Home
