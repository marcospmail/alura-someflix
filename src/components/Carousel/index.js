import React from 'react'

import Slider, { SliderItem } from '../Slider'
import VideoCard from './components/VideoCard'

import { VideoCardGroupContainer, Title, ExtraLink } from './styles'

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryname = category.name
  const categoryColor = category.color
  const categoryExtraLink = category.link_extra
  const { videos } = category

  if ((ignoreFirstVideo && videos.length === 1) || !videos.length) {
    return null
  }

  return (

    <VideoCardGroupContainer>
      {categoryname && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryname}
          </Title>
          {categoryExtraLink
            && (
              <ExtraLink href={categoryExtraLink.url} target="_blank">
                {categoryExtraLink.text}
              </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.id}>
              <VideoCard
                videoname={video.name}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

export default VideoCardGroup
