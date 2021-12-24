// DO NOT DELETE
import * as React from 'react'
import { DogImage } from './DogImage'

export const Description = props => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg',
  )

  const updateImg = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    if (data.status === 'success') {
      setDogUrl(data.message)
    }
  }

  return (
    <div className="itemArea">
      <div className="flex">
        <div className="item_des">
          <p>{props.des_text}</p>
        </div>
        <div className="item_img">
          <div className="imgFlame">
            <DogImage url={dogUrl} />
          </div>
        </div>
        <button onClick={updateImg} className="update btn">
          {props.btn_text}
        </button>
      </div>
    </div>
  )
}
