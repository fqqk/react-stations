// DO NOT DELETE

import * as React from 'react'
import './App.css'

// /**
//  * 
//  * @type {React.FC}
//  */
export const App = () => {

  const [dogUrl,setDogUrl] = React.useState("https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg");


  const updateImg = async function() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
      if(data.status === "success"){
        // console.log(data.message);
        setDogUrl(data.message);
      }
  }


  return (
    <div className = "container">
      <header>
        <h2>Dog アプリ</h2>
      </header>
      <main>
        <section className = "dogView">
        <div className = "flex">
          <div className = "item_des"><p>犬の画像を表示するサイトです</p></div>
          <div className = "item_img">
            <img src = {dogUrl}></img>
            <button onClick = {updateImg} className = "btn">更新</button>
          </div>
        </div>
        </section>
      </main>
      
    </div>
  )
}
