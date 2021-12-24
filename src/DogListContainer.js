// DO NOT DELETE

import * as React from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([])
  const [selectedBreed, setSelectedBreed] = React.useState('')
  const [imgUrlList, setImgUrlList] = React.useState([])

  const handleChange = e => {
    setSelectedBreed(e.target.value)
  }

  const DogList = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    if (data.status === 'success') {
      const breeds = Object.keys(data.message)
      setBreeds(breeds)
    }
  }

  const DogImgList = async () => {
    const res = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
    )
    const data = await res.json()
    if (data.status === 'success') {
      const imgsUrl = data.message
      setImgUrlList(imgsUrl)
    }
  }

  const ImgList = imgUrlList.map(dogUrl => (
    <div key={dogUrl} className="flame">
      <img key={dogUrl} src={dogUrl} className="dogImg" />
    </div>
  ))

  React.useEffect(() => {
    DogList()
  }, [])

  return (
    <>
      <div className="select-flex">
        <BreedsSelect
          breeds={breeds}
          value={selectedBreed}
          change={handleChange}
        />
        <button onClick={DogImgList} className="select btn">
          表示
        </button>
      </div>
      <div className="imgFlex">{ImgList}</div>
    </>
  )
}
