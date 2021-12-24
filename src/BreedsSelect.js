// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = props => {
  const breeds = props.breeds
  const optionBreeds = breeds.map(breed => (
    <option value={breed} key={breed}>
      {breed}
    </option>
  ))

  return (
    <>
      <p>Breeds List</p>
      <select value={props.value} onChange={props.change}>
        <option>犬種を選んでください</option>
        {optionBreeds}
      </select>
    </>
  )
}
